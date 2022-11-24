import React, { createContext, PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import useTheme from "../hooks/useTheme";
import { darkTheme, lightTheme } from "../styles/theme";

const defaultValue = {
  theme: "lightTheme",
  onChangeTheme: () => {},
};

const ThemeContext = createContext<typeof defaultValue>(defaultValue);

function ThemeProvider({ children }: PropsWithChildren) {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider
        theme={themeProps.theme === "lightTheme" ? lightTheme : darkTheme}
      >
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
