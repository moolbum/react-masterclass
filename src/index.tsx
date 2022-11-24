import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./contexts/theme";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
