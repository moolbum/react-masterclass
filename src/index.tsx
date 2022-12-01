import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./contexts/theme";
import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import routers from "./routers";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AxiosError } from "axios";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => console.log(error as AxiosError),
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyle />
        <RouterProvider router={routers} />
        <ReactQueryDevtools initialIsOpen />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
