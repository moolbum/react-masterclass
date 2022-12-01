import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
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
          <button onClick={() => goToPage("/coin")}>Coin</button>
        </li>
        <button type="button" onClick={() => {}}>
          DarkMode
        </button>
      </ul>
    </header>
  );
}

export default Header;
