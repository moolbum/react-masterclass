import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../../../atoms";
import {
  COIN_PATH,
  MAIN_PATH,
  TODO_LIST_PATH,
} from "../../../routers/constants";

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
          <button onClick={() => goToPage(MAIN_PATH)}>Home</button>
        </li>
        <li>
          <button onClick={() => goToPage(COIN_PATH)}>Coin</button>
        </li>
        <li>
          <button onClick={() => goToPage(TODO_LIST_PATH)}>TodoList</button>
        </li>
        <button type="button" onClick={() => setIsDarkMode((prev) => !prev)}>
          {isDarkMode ? "DarkMode" : "LightMode"}
        </button>
      </ul>
    </header>
  );
}

export default Header;
