import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App.jsx";

import { DiscoveryProvider } from "./context/DiscoveryContext.jsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <DiscoveryProvider>
        <App />
      </DiscoveryProvider>
    
  </React.StrictMode>
);