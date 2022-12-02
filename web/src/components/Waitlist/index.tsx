import { Box, Button, Grid, Paper, Typography } from "@mui/material";

type Props = {};

const Waitlist = (props: Props) => {
  return (
    <Box sx={{ textAlign: "center"}}>
      <Typography
        variant="body2"
        component="p"
        mb={3}
      >
        This project is deployed on the <b>Mumbai testnet</b> on the Polygon network.
        <br />
        If you like the project and want us to contact you at launch, kindly
        fill the form. <br /> We promise to let you know when we are about to go
        live on the mainnet.
      </Typography>
      <Button variant="contained" color="primary" sx={{ height: 50, px: 20 }}>
        Join the wait list!!!
      </Button>
    </Box>
  );
};

export default Waitlist;
