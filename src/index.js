import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { StateProvider } from "./state";

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
