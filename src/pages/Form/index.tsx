import React, { BaseSyntheticEvent } from "react";
import styled from "styled-components";
import { Form } from "../../components/atoms/Form";

function HeadlessForm() {
  const handleSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      password: formData.get("password"),
      passwordCheck: formData.get("passwordCheck"),
    };

    console.log("submit form>>>>>>>", data);
  };

  return (
    <>
      <h2 style={{ marginBottom: "30px" }}>Headless form</h2>

      <StyledForm onSubmit={handleSubmit}>
        <Form.Label htmlFor="name">아이디</Form.Label>
        <Form.Control type="text" id="name" name="name" />

        <Form.Label htmlFor="password">비밀번호</Form.Label>
        <Form.Control type="password" id="password" name="password" />

        <Form.Label htmlFor="passwordCheck">비밀번호 확인</Form.Label>
        <Form.Control type="password" id="passwordCheck" name="passwordCheck" />

        <StyledSubmit type="submit">제출하기</StyledSubmit>
      </StyledForm>
    </>
  );
}

export default HeadlessForm;

const StyledForm = styled(Form)`
  display: grid;
  gap: 8px;
  width: 40%;
  margin: 0 auto;
`;

const StyledSubmit = styled(Form.Submit)``;
