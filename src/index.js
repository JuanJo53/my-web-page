import React from "react";
import { createRoot } from "react-dom/client";
import App from "./containers/App";
import "./styles/global.css";

import "./services/firebase-config";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
