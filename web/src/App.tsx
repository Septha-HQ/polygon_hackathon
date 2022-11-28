import { useState } from "react";
import "./App.scss";
import Home from "./layouts/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import leftSpiral from "./assets/left-spiral.png";
import rightSpiral from "./assets/right-spiral.png";

function App() {
  return (
    <>
      <img
        src={leftSpiral}
        alt=""
        style={{
          position: "absolute",
          width: "271px",
          marginLeft: "-20px",
          top: "471px",
          left: 0,
        }}
      />
      <img
        src={rightSpiral}
        alt=""
        style={{
          position: "absolute",
          width: "138px",
          right: 0,
          top: "160px",
        }}
      />
      <Container maxWidth="xl">
        <Navbar />
        <Home />
        <Footer />
      </Container>
    </>
  );
}

export default App;
