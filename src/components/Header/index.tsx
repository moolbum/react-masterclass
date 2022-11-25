import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme";

function Header() {
  const { onChangeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const goToPage = (url: string) => {
    navigate(url);
  };

  return (
    <header>
      <ul>
        <li>
          <button onClick={() => goToPage("/")}>Home</button>
        </li>
        <li>
          <button onClick={() => goToPage("/about")}>Abount</button>
        </li>
        <li>
          <button onClick={() => goToPage("/coin")}>Coin</button>
        </li>
        <button type="button" onClick={onChangeTheme}>
          DarkMode
        </button>
      </ul>
    </header>
  );
}

export default Header;
