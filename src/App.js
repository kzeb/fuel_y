import React from "react";
import { Router } from "react-router-dom";
import { Routing } from "./Routing";
import { history } from "./services/history";
import { loginAutomatically } from "./services/user";

if (loginAutomatically()) {
  history.push("/user");
}

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routing />
      </Router>
    </div>
  );
}

export default App;
