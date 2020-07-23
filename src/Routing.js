import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login } from "./domain/Login";
import { Register } from "./domain/Register";
import { User } from "./domain/User";
import { AuthRoute } from "./AuthRoute";
import { Refueling } from "./domain/Refueling";
import { RefuelingForm } from "./domain/RefuelingForm";

export const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <AuthRoute path="/user" exact>
          <User />
        </AuthRoute>
        <AuthRoute path="/refueling" exact>
          <Refueling />
        </AuthRoute>
        <AuthRoute path="/refueling/new" exact>
          <RefuelingForm />
        </AuthRoute>
      </Switch>
    </>
  );
};
