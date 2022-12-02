export type ThemeType = typeof lightTheme;

const darkTheme = {
  white: "#fff",
  black: "#1e1e1e",
  textColor: "#f5f6fa",
  textColorReversal: "#2f3640",
  backgroundColor: "#2f3640",
  backgroundColorReversal: "#f5f6fa",
  accentColor: "#0071e3",
  error: "#fc1616",
};

const lightTheme = {
  white: "#fff",
  black: "#1e1e1e",
  textColor: "#2f3640",
  textColorReversal: "#f5f6fa",
  backgroundColor: "#f5f6fa",
  backgroundColorReversal: "#2f3640",
  accentColor: "#0071e3",
  error: "#fc1616",
};

export { darkTheme, lightTheme };
