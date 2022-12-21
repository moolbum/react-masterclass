import React from "react";
import styled from "styled-components";
import { Dialog } from "../../components/atoms/Dialog";

function HeadLess() {
  return (
    <div>
      <h2>합성 컴포넌트</h2>

      <Dialog1>
        Dialog 테스트
        <Toggle1>Dialog 토글 버튼</Toggle1>
        <Dialog.Portal>
          <Overlay />
          <Content>
            Dialog 아이템 111
            <Dialog2>
              Dialog 테스트 22222
              <Toggle2>Dialog 토글 버튼</Toggle2>
              <Dialog.Portal>
                <Overlay2 />
                <Content>
                  Dialog 아이템 222222
                  <Toggle1>Dialog 닫기 버튼</Toggle1>
                </Content>
              </Dialog.Portal>
            </Dialog2>
            <Dialog.Toggle>Dialog 닫기 버튼</Dialog.Toggle>
          </Content>
        </Dialog.Portal>
      </Dialog1>
    </div>
  );
}

export default HeadLess;
const Dialog1 = styled(Dialog)``;
const Dialog2 = styled(Dialog)``;
const Toggle1 = styled(Dialog.Toggle)``;
const Toggle2 = styled(Dialog.Toggle)``;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: tomato;
  width: 100%;
  height: 100vh;
`;

const Overlay2 = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: green;
  width: 100%;
  height: 100vh;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
`;
