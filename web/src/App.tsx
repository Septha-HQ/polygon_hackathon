import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./layouts/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import leftSpiral from "./assets/left-spiral.png";
import rightSpiral from "./assets/right-spiral.png";
import Verify from "./layouts/Verify";
import PrivateRoute from "./utils/PrivateRoute";

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
        <Router>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/verify" element={<Verify />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Container>
      <Footer />
    </>
  );
}

export default App;
