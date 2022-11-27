import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Work Sans, sans-serif",
    h1: {
      fontFamily: "Syne, sans-serif",
    },
    h2: {
      fontSize: 48,
      fontWeight: 400,
    },
    h3: {
      fontSize: 28,
      fontWeight: 400,
    },
    body1: {
      fontWeight: 300,
      fontSize: 16,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "contained" &&
            ownerState.color === "primary" && {
              backgroundColor: "#ac10af",
              color: "#fff",
              "&$disabled": {
                color: "#7b7b7b",
              },
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#000000",
              },
            }),
        }),
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
