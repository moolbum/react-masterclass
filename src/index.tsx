import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./contexts/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import routers from "./routers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </ThemeProvider>
  </React.StrictMode>
);
