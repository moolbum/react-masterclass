import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routers from "./routers";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <RouterProvider router={routers} />
      <ReactQueryDevtools initialIsOpen />
    </ThemeProvider>
  );
}

export default App;
