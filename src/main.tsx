/* eslint-disable import/no-unused-modules */
import { Auth0Provider } from "@auth0/auth0-react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import { authConfig } from "./authConfig.ts";

import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider {...authConfig}>
      <App />
    </Auth0Provider>
  </StrictMode>,
);
