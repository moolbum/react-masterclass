import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme";

function Header() {
  const { onChangeTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const onHomeClick = () => {
    navigate("/");
  };

  const onAboutClick = () => {
    navigate("/about");
  };

  return (
    <header>
      <ul>
        <li>
          <button onClick={onHomeClick}>Home</button>
        </li>
        <li>
          <button onClick={onAboutClick}>Abount</button>
        </li>
        <button type="button" onClick={onChangeTheme}>
          DarkMode
        </button>
      </ul>
    </header>
  );
}

export default Header;
