import React from "react";
import { Dialog } from "../../components/atoms/Dialog";

function HeadLess() {
  return (
    <div>
      합성 컴포넌트 공부
      <Dialog>
        Dialog 테스트
        <Dialog.Toggle>Dialog 토글 버튼</Dialog.Toggle>
        <Dialog.List>
          <Dialog.Item>Dialog 아이템1</Dialog.Item>
          <Dialog.Item>Dialog 아이템2</Dialog.Item>
          <Dialog.Item>Dialog 아이템3</Dialog.Item>
          <Dialog.Item>Dialog 아이템4</Dialog.Item>
        </Dialog.List>
      </Dialog>
      <Dialog>
        Dialog 테스트1
        <Dialog.Toggle>Dialog 토글 버튼</Dialog.Toggle>
        <Dialog.List>
          <Dialog.Item>Dialog 아이템5</Dialog.Item>
          <Dialog.Item>Dialog 아이템6</Dialog.Item>
          <Dialog.Item>Dialog 아이템7</Dialog.Item>
          <Dialog.Item>Dialog 아이템8</Dialog.Item>
        </Dialog.List>
      </Dialog>
    </div>
  );
}

export default HeadLess;
