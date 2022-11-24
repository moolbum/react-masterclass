import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme";

function Header() {
  const { onChangeTheme } = useContext(ThemeContext);

  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>Abount</Link>
        </li>
        <button type="button" onClick={onChangeTheme}>
          Button
        </button>
      </ul>
    </header>
  );
}

export default Header;
