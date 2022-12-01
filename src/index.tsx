import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./contexts/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import routers from "./routers";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle />
        <RouterProvider router={routers} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
