import { useEffect, useState, createContext, ReactNode } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";
import { ITxn, TxnContextType } from "../interface/interface";

declare global {
  interface Window {
    ethereum: any;
  }
}

type TxnContextProviderProps = {
  children: ReactNode;
};

const initialTxn = {
  country: "",
  curr: "",
  amount: 0,
  ref: "",
  cat: 0,
  provider: "",
};

export const TxnContext = createContext<TxnContextType | null>(null);

const { ethereum } = window;
const MUMBAI_CHAIN_ID = 80001;

const getContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const txnContract = new ethers.Contract(contractAddress, contractABI, signer);

  return { signer, txnContract };
};

// Provider
export const TxnProvider = ({ children }: TxnContextProviderProps) => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [chainId, setChainId] = useState(0);
  const [isCurrentNetwork, setIsCurrentNetwork] = useState(false);
  const [txn, setTxn] = useState<ITxn>(initialTxn)!;

  useEffect(() => {
    // check if a wallet is in the localStorage
    try {
      const connectedAccount = localStorage.getItem("connectedAccount")!;

      if (connectedAccount) {
        setConnectedAccount(connectedAccount);
        // try connect
        getWallet();
      }
    } catch (error) {
      console.log(error);
    }
  }, [connectedAccount]);

  const getWallet = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(ethereum);
    const { chainId } = await provider.getNetwork();

    setChainId(chainId);

    setConnectedAccount(accounts[0]);

    // Save to localStorage
    await localStorage.setItem("connectedAccount", accounts[0]);

    setIsCurrentNetwork(
      accounts[0] ? (chainId === MUMBAI_CHAIN_ID ? true : false) : false
    );
  };

  // Connect wallet
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");

      await getWallet();

      // reload;
      window.location.href = "/";
    } catch (error) {
      console.log(error);

      throw new Error("No thereum wallet.");
    }
  };

  // Disconnect wallet
  const disconnectWallet = async () => {
    setConnectedAccount("");

    // Save to localStorage
    await localStorage.removeItem("connectedAccount");
    // reload;
    window.location.href = "/";
  };

  const sendTxn = async () => {
    try {
      console.log(txn);
      const { curr, amount, ref, cat } = txn;

      const { signer, txnContract } = getContract();

      await txnContract.pay(curr, amount, ref, cat);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TxnContext.Provider
      value={{
        isCurrentNetwork,
        connectedAccount,
        chainId,
        txn,
        setTxn,
        connectWallet,
        disconnectWallet,
        sendTxn,
      }}
    >
      {children}
    </TxnContext.Provider>
  );
};
