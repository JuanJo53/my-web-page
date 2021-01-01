import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/global.css";

import "./services/firebase-config";

const container = document.getElementById("root");

ReactDOM.render(<App />, container);
