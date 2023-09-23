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
      description: formData.get("description"),
    };

    console.log("submit form>>>>>>>", data);
  };

  return (
    <>
      <h2 style={{ marginBottom: "30px" }}>Headless form</h2>

      <StyledForm onSubmit={handleSubmit}>
        <StyledField>
          <Form.Label htmlFor="name">아이디</Form.Label>
          <StyledControl
            id="name"
            name="name"
            placeholder="아이디를 입력해주세요"
            required
          />
        </StyledField>

        <StyledField>
          <Form.Label htmlFor="password">비밀번호</Form.Label>
          <StyledControl
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            required
          />
        </StyledField>

        <StyledField>
          <Form.Label htmlFor="passwordCheck">비밀번호 확인</Form.Label>
          <StyledControl
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            placeholder="비밀번호를 입력해주세요"
            required
          />
        </StyledField>

        <StyledField>
          <Form.Label htmlFor="description">메모</Form.Label>
          <StyledControl
            id="description"
            name="description"
            style={{ padding: "0" }}
          >
            <StyledTextArea placeholder="메모를 입력해주세요" />
          </StyledControl>
        </StyledField>

        <StyledSubmit type="submit">제출하기</StyledSubmit>
      </StyledForm>
    </>
  );
}

export default HeadlessForm;

const StyledForm = styled(Form)`
  display: grid;
  gap: 16px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const StyledField = styled(Form.Field)`
  display: grid;
  gap: 8px;
`;

const StyledControl = styled(Form.Control)`
  padding: 8px 6px;
  border-radius: 8px;
`;

const StyledSubmit = styled(Form.Submit)`
  padding: 8px 6px;
  border-radius: 8px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  min-height: 100px;
  padding: 8px 4px;
`;
