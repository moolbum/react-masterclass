import React from "react";
import styled from "styled-components";
import { Dialog } from "../../components/atoms/Dialog";

function HeadLess() {
  const handleConfirmClick = () => {
    console.log("클릭>>>>");
  };

  return (
    <div>
      <h2>합성 컴포넌트</h2>

      <Dialog>
        Dialog 테스트
        <Dialog.Toggle>Dialog 열기 버튼</Dialog.Toggle>
        <Dialog.Portal>
          <Overlay />
          <Content>
            <div className="content-container">
              <h2>다이얼로그 (모달)</h2>
              <p>세상에 드디어 마참내</p>

              <div className="content-toggle-container">
                <Dialog.Toggle onChange={handleConfirmClick}>
                  확인
                </Dialog.Toggle>
                <Dialog.CloseToggle>닫기</Dialog.CloseToggle>
              </div>
            </div>
          </Content>
        </Dialog.Portal>
      </Dialog>
    </div>
  );
}

export default HeadLess;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 600px;
    padding: 20px;
    border-radius: 8px;
    background-color: #fff;
    color: #1e1e1e;
  }

  .content-toggle-container {
    display: flex;
    justify-content: end;
  }
`;
