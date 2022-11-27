import { useState } from "react";
import "./App.scss";
import Home from "./layouts/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "@mui/material";


function App() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
