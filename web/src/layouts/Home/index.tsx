import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import CardForm from "../../components/CardForm";
import Roadmap from "../../components/Roadmap";
import Waitlist from "../../components/Waitlist";
import { Txn } from "../../shared/interface";

type Props = {};

const initialTxn = {
  country: "",
  provider: "",
  reference: "",
  amount: 0,
};

const Home = (props: Props) => {
  const [txn, setTxn] = useState<Txn>(initialTxn);

  return (
    <>
      <Box my={20}>
        {/* Hero page */}
        <Grid container spacing={20}>
          <Grid item sm={12} md={6} my={5}>
            <Typography
              variant="h1"
              component="div"
              mb={3}
              sx={{ fontSize: 84, lineHeight: "110%" }}
            >
              The payment engine of Web3
            </Typography>
            <Typography
              variant="h4"
              component="div"
              mb={3}
              sx={{ fontSize: 32 }}
            >
              Payment has never been this fun!!!
            </Typography>

            <Button variant="contained" color="primary" size="large">
              Connect your wallet to get started
            </Button>
          </Grid>
          <Grid item sm={12} md={6}>
            <Paper
              sx={{
                minHeight: 450,
                minWidth: 500,
                borderRadius: "20px",
                color: "#ffffff",
                background: "#ffffffaa",
              }}
            >
              <CardForm {...txn} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box>
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
