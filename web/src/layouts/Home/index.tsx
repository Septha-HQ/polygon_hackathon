import React, { useContext, useEffect, useState } from "react";
import { TxnContext } from "../../context/TransactionContext";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import CardForm from "../../components/CardForm";
import Roadmap from "../../components/Roadmap";
import Waitlist from "../../components/Waitlist";
import HomeIntro from "../../components/HomeIntro";
import CardInit from "../../components/Card";

type Props = {};

const MUMBAI_CHAIN_ID = 80001;

const hashWalletAddress = (address: string) => {
  const first4 = address.slice(0, 7);
  const last4 = address.slice(address.length - 4, address.length);

  return `${first4}...${last4}`;
};

const Home = (props: Props) => {

  const { isCurrentNetwork, chainId, connectedAccount, connectWallet } =
    useContext(TxnContext)!;


  return (
    <>
      <Typography
        variant="body1"
        component="div"
        sx={{ float: "right", mr: 4 }}
      >
        {connectedAccount
          ? chainId === MUMBAI_CHAIN_ID
            ? hashWalletAddress(connectedAccount)
            : "You are not on the Mumbai testnet"
          : "Connect your wallet to Mumbai testnet on the Polygon network"}
      </Typography>
      <Box my={0}>
        {/* Hero page */}
        <Grid container spacing={20}>
          <Grid item sm={12} md={6} sx={{ my: { lg: 5, xs: 0 }, pt: 0 }}>
            {isCurrentNetwork?<CardInit/>:<HomeIntro />}
          </Grid>
          <Grid item sm={12} md={6}>
            <Paper
              sx={{
                maxHeight: 450,
                maxWidth: 500,
                borderRadius: "20px",
                color: "#ffffff",
                background: isCurrentNetwork?"#ffffff":"#ffffffaa",
                p: 7,
              }}
            >
              <CardForm />
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box mt={20}>
        <Typography variant="h2" component="div" mb={3}>
          Project Roadmap
        </Typography>

        <Grid container spacing={20}>
          <Grid item md={3}></Grid>
          <Grid item sm={9}>
            <Roadmap />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: "rgba(37, 40, 62, 0.8)",
          py: 10,
          mb: 15,
          borderRadius: 5,
        }}
      >
        <Waitlist />
      </Box>
    </>
  );
};

export default Home;
