import React from "react";
import { Redirect, Route } from "react-router";
import jwt_decode from "jwt-decode";
import { logout } from "./services/user";

export const AuthRoute = ({ children, ...rest }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Redirect to={`/`} />;

  const decoded = jwt_decode(token);
  const now = Date.now() / 1000;
  if (decoded.exp <= now) {
    logout();
    return <Redirect to={`/`} />;
  }
  return <Route {...rest}>{children}</Route>;
};
