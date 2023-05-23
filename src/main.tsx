import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./index.css"
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>
);
