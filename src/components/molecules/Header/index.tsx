import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../../../atoms";
import {
  COIN_PATH,
  MAIN_PATH,
  TODO_LIST_PATH,
} from "../../../routers/constants";

const HeaerContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 28px;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  button {
    padding: 5px;
    border-radius: 2px;
  }
`;

function Header() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkAtom);

  const goToPage = (url: string) => {
    navigate(url);
  };

  return (
    <HeaerContainer>
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
      </ul>
      <button type="button" onClick={() => setIsDarkMode((prev) => !prev)}>
        {isDarkMode ? "DarkMode" : "LightMode"}
      </button>
    </HeaerContainer>
  );
}

export default Header;
