import React from "react";
import styled from "styled-components";
import { AlertDialog } from "../../components/atoms/AlertDialog";
import { Dialog } from "../../components/atoms/Dialog";

function HeadLess() {
  const handleConfirmClick = () => {
    console.log("클릭>>>>");
  };

  return (
    <div>
      <Title>합성 컴포넌트</Title>

      <Section>
        {/* {Dialog} */}
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
                  <Dialog.Toggle onClick={handleConfirmClick}>
                    확인
                  </Dialog.Toggle>
                  <Dialog.CloseToggle>닫기</Dialog.CloseToggle>
                </div>
              </div>
            </Content>
          </Dialog.Portal>
        </Dialog>
      </Section>

      <Section>
        {/* {AlertDialog} */}
        <AlertDialog>
          Alert Dialog 테스트
          <AlertDialog.Toggle>Alert 열기 버튼</AlertDialog.Toggle>
          <AlertDialog.Portal>
            <AlertDialogOverlay />
            <Content>
              <div className="content-container">
                <AlertDialogTitle>Alert 다이얼로그 (모달)</AlertDialogTitle>
                <p>꼭 읽으세요</p>

                <div className="content-toggle-container">
                  <AlertDialog.Toggle onClick={handleConfirmClick}>
                    확인
                  </AlertDialog.Toggle>
                  <AlertDialog.CloseToggle>닫기</AlertDialog.CloseToggle>
                </div>
              </div>
            </Content>
          </AlertDialog.Portal>
        </AlertDialog>
      </Section>
    </div>
  );
}

export default HeadLess;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const Section = styled.section`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
`;

const AlertDialogOverlay = styled(AlertDialog.Overlay)`
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

const AlertDialogTitle = styled.h2`
  color: red;
`;
