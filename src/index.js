import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Global } from "./lib";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Global />
    <App />
  </StrictMode>,
  rootElement
);
