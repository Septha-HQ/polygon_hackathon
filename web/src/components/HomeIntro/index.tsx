import { Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { TxnContext } from "../../context/TransactionContext";

type Props = {};

const HomeIntro = (props: Props) => {
    const {connectWallet} = useContext(TxnContext)!;
  return (
    <>
      <Typography
        variant="h1"
        component="div"
        mb={3}
        sx={{ fontSize: 84, lineHeight: "110%" }}
      >
        The payment engine of Web3
      </Typography>
      <Typography variant="h4" component="div" mb={3} sx={{ fontSize: 32 }}>
        Payment has never been this fun!!!
      </Typography>

      <Typography variant="body1" component="div" mb={1}>
        {"Connect to Mumbai testnet on the Polygon network"}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={connectWallet}
      >
        Connect your wallet
      </Button>
    </>
  );
};

export default HomeIntro;
