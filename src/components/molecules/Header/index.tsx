import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../../../atoms/theme";

function Header() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkAtom);

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
        <button type="button" onClick={() => setIsDarkMode((prev) => !prev)}>
          {isDarkMode ? "DarkMode" : "LightMode"}
        </button>
      </ul>
    </header>
  );
}

export default Header;
