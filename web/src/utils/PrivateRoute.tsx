import React from "react";
import { Outlet, Navigate } from "react-router-dom";

type Props = {};

const PrivateRoute = (props: Props) => {
  const connectedAccount = localStorage.getItem("connectedAccount")!;

  return connectedAccount ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
