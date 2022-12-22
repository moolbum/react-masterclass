import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routers from "./routers";
import GlobalStyle from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </ThemeProvider>
  );
}

export default App;
