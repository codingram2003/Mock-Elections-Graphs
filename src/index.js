import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./Demo";
import HorizontalBars from "./Chart";
import "./index.css";
import StackBars from "./Charts";
import Info from "./Info";
ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <h3 class="animate-charcter">MOCK ELECTIONS</h3>
      <div className="home">
        <StackBars />
        <Info />
      </div>
    </StyledEngineProvider>
  </React.StrictMode>
);
