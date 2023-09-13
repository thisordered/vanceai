import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/fonts.scss";
import "./styles/components.scss";
import "./index.scss";
import App from "./App";

document.documentElement.dir = "rtl";
document.documentElement.lang = "fa-IR";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
