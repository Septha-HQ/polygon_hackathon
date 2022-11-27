import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <Box my={35}>
      <Grid container spacing={20}>
        <Grid item sm={12} md={6}>
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

          <Button
            variant="contained"
            color="primary"
            size="large"
          >
            Connect your wallet to get started
          </Button>
        </Grid>
        <Grid item sm={12} md={6}>
          <Typography>Card</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
