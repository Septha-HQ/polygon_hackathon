import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { TxnProvider } from "./context/TransactionContext";

const theme = createTheme({
  // html:{},
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
    body2: {
      fontWeight: 300,
      fontSize: 24,
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
          height: 50,
          "&.Mui-disabled": { background: "#777777", color: "#ffffff" },
        }),
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          "& .MuiStepLabel-label": {
            color: "#ffffff",
            fontSize: "28px",
          },
          "& .MuiStepLabel-label.Mui-active": {
            color: "#ffffff",
          },
          "& .MuiStepLabel-label.Mui-completed": {
            color: "#ffffff",
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          fontSize: 50,
          marginLeft: -15,
          "&.Mui-active": {
            color: "#ffffff",
          },
        },
      },
    },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       "& .MuiInputBase-input": {
    //         // border: "1px solid rgba(255, 255, 255, 0.4)",
    //       },

    //       "& .MuiSelect-outlined": {
    //         border: "1px solid rgba(255, 255, 255, 0.4)",
    //       },
    //     },
    //   },
    // },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       border: "1px solid rgba(255, 255, 255, 0.4)",
    //       color: "#ffffff !important",
    //         "& ::placeholder":{
    //           color: "rgba(255, 255, 255, 0.4)",
    //         }
    //     },
    //   },
    // },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TxnProvider>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </TxnProvider>
);
