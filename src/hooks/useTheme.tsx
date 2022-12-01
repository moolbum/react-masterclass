import { useCallback, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("darkTheme");

  const onChangeTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme === "darkTheme" ? "darkTheme" : "lightTheme"
    );
  }, []);

  return {
    theme,
    onChangeTheme,
  };
}

export default useTheme;
