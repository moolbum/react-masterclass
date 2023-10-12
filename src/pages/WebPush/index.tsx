import React from "react";
import styled from "styled-components";

function WebPush() {
  const handleButtonClick = () => {
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        const notification = new Notification("Example", {
          body: "Hello world",
          data: { text: "Hi" },
        });

        notification.addEventListener("error", (e) => {
          alert("error");
        });
      }
    });
  };

  return (
    <>
      <Button onClick={handleButtonClick}>Click</Button>
    </>
  );
}

export default WebPush;

const Button = styled.button``;
