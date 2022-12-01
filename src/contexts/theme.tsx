import React, { createContext, PropsWithChildren } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import useTheme from "../hooks/useTheme";
import { darkTheme, lightTheme } from "../styles/theme";

const defaultValue = {
  theme: "darkTheme",
  onChangeTheme: () => {},
};

const ThemeContext = createContext<typeof defaultValue>(defaultValue);

function ThemeProvider({ children }: PropsWithChildren) {
  const themeProps = useTheme();

  return (
    <ThemeContext.Provider value={themeProps}>
      <StyledThemeProvider
        theme={themeProps.theme === "darkTheme" ? darkTheme : lightTheme}
      >
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
