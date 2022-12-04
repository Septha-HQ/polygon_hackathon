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
  const [fetchedTxn, setFetchedTxn] = useState();
  const [txnStatus, setTxnStatus] = useState(false);

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

    fetchTxn();
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
    // setCurrRate();
    setConnectedAccount("");

    // Save to localStorage
    await localStorage.removeItem("connectedAccount");
    // reload;
    window.location.href = "/";
  };

  // Send transactions
  const sendTxn = async () => {
    try {
      console.log(txn);
      const { curr, amount, ref, cat } = txn;

      const { signer, txnContract } = getContract();

      const { _hex } = await txnContract.amountToPay(curr, amount);

      // console.log(_hex);

      await txnContract.pay(curr, amount, ref, cat, { value: _hex });

      // Successful
      // Change card
      setTxnStatus(true);

      setTxn({ ...initialTxn });

      // go to transactions
    } catch (error) {
      console.log(error);
    }
  };

  // For owner to set currency rate
  const setCurrRate = async () => {
    const _curr = "GHC";
    try {
      const { txnContract } = getContract();

      await txnContract.setRate(_curr, 1410007869);

      console.log(await txnContract.dollarRate(_curr));
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch transaction for a user
  const fetchTxn = async () => {
    try {
      const { txnContract } = getContract();

      const txns = await txnContract.getTxn();

      // console.log(txns);
      setFetchedTxn(txns);
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
        fetchTxn,
        txnStatus,
        setTxnStatus,
      }}
    >
      {children}
    </TxnContext.Provider>
  );
};
