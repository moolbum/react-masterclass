import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import TabItem from "../../components/atoms/TabItem";

type TabType = "NAME" | "ADDRESS" | "AGE";
const TAB_LIST: TabType[] = ["NAME", "ADDRESS", "AGE"];

function Tabs() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [selectTab, setSelectTab] = useState<TabType>("NAME");

  const renderTabItemTitle = (type: TabType) => {
    switch (type) {
      case "NAME":
        return <span>Name</span>;

      case "ADDRESS":
        return <span>Address</span>;

      case "AGE":
        return <span>Age</span>;
    }
  };

  const renderTabItemContent = (tabType: TabType) => {
    switch (tabType) {
      case "NAME":
        return <>Name</>;

      case "ADDRESS":
        return <>Address</>;

      case "AGE":
        return <>Age</>;
    }
  };

  return (
    <>
      <StyledTabs role="tablist">
        {TAB_LIST.map((item, idx) => {
          return (
            <StyeldTabItem
              ref={item === selectTab ? buttonRef : null}
              key={idx.toString()}
              tabIndex={item === selectTab ? 0 : -1}
              isSelect={item === selectTab}
              tabValue={item}
              onFocusItem={(value) => {
                setSelectTab(value as TabType);
              }}
            >
              {renderTabItemTitle(item)}
            </StyeldTabItem>
          );
        })}
      </StyledTabs>

      {renderTabItemContent(selectTab)}
    </>
  );
}

export default Tabs;

const StyledTabs = styled.nav`
  display: flex;
  margin: 24px 0;
  border-bottom: 1px solid gray;
`;

const StyeldTabItem = styled(TabItem)<{
  isSelect?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 8px 16px;
  cursor: pointer;
  background: none;
  box-shadow: none;

  ${({ isSelect }) => {
    return isSelect
      ? css`
          border: none;
          border-bottom: 3px solid red;
        `
      : css`
          border: none;
        `;
  }}
`;
