import { Dispatch, SetStateAction } from "react";

export interface ITxn {
    country: string;
    curr: string;
    amount: number;
    ref: string;
    cat: number;
    provider: string
}
export type TxnContextType = {
    // txns: ITxn[];
    // saveTxn: (txn: ITxn) => void;
    // updateTxn: (id: number) => void;
    isCurrentNetwork: boolean;
    chainId: number;
    connectedAccount: string;
    txn: ITxn;
    setTxn: Dispatch<SetStateAction<ITxn>>;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => Promise<void>;
    sendTxn: () => Promise<void>;
    fetchTxn: any;
    txnStatus: boolean,
    setTxnStatus: Dispatch<SetStateAction<boolean>>;
}
