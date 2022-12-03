export interface ITxn {
    id: number;
    title: string;
    description: string;
    status: boolean;
}
export type TxnContextType = {
    // txns: ITxn[];
    // saveTxn: (txn: ITxn) => void;
    // updateTxn: (id: number) => void;
    isCurrentNetwork: boolean;
    chainId: number;
    connectedAccount: string;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => Promise<void>;
}

