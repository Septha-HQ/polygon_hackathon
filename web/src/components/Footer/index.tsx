import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box
      sx={{
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
      }}
    >
      <Typography variant="body2" component="div">
        &copy; {new Date().getFullYear()} <b>septha</b>, all right reserved
      </Typography>
    </Box>
  );
};

export default Footer;
