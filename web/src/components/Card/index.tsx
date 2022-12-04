import { Box, Paper, Typography } from "@mui/material";
import bgImg from "../../assets/card-img.png";
import React, { useContext } from "react";
import { TxnContext } from "../../context/TransactionContext";
import {providers} from "../CardForm";

type Props = {};

const CardInit = (props: Props) => {
  const { txn } = useContext(TxnContext)!;

  
  const provider = providers.find((x) => x.name == txn.provider);

  return (
    <Paper
      sx={{
        minHeight: "350px",
        maxWidth: "600px",
        ml: { lg: 10, md: 20, sm: 0, borderRadius: 10},
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: provider?.color?provider?.color:"#ffffff",
        background: provider?.bgcolor?provider?.bgcolor:"#292E4E",
      }}
      elevation={20}
    >
      <Box
        p={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" component="div">
          Recharge Card
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography variant="h6" component="div">
            {txn.curr}
          </Typography>
          <Typography variant="h5" component="div">
            {new Intl.NumberFormat().format(txn?.amount)}
          </Typography>
        </Box>
      </Box>
      <img src={bgImg} alt="" height={200} style={{ width: "75%" }} />
    </Paper>
  );
};

export default CardInit;
