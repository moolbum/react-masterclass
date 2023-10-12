import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../../../atoms";
import PATH from "../../constant/path";
import NAV_LABEL from "../../constant/navLabel";

const NAV_LIST = [
  { path: PATH.MAIN_PATH, label: NAV_LABEL.home },
  { path: PATH.COIN_PATH, label: NAV_LABEL.coin },
  { path: PATH.TODO_LIST_PATH, label: NAV_LABEL.toDoList },
  { path: PATH.WEB_PUSH_PATH, label: NAV_LABEL.webPush },
  { path: PATH.HEADLESS_PATH, label: NAV_LABEL.headless },
  { path: PATH.TABS_PATH, label: NAV_LABEL.tabs },
];

function Header() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkAtom);

  const goToPage = (url: string) => {
    navigate(url);
  };

  const handleDarkModeClick = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <HeaerContainer>
      <ul>
        {NAV_LIST.map((item, idx) => {
          return (
            <li key={idx.toString()}>
              <button onClick={() => goToPage(item.path)}>{item.label}</button>
            </li>
          );
        })}
      </ul>

      <button type="button" onClick={handleDarkModeClick}>
        {isDarkMode ? "DarkMode" : "LightMode"}
      </button>
    </HeaerContainer>
  );
}

export default Header;

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
