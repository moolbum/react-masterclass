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
        <StyledField name="name">
          <Form.Label>아이디</Form.Label>
          <StyledControl
            name="name"
            placeholder="아이디를 입력해주세요"
            required
          />
          <Form.Message match="typeMismatch">MisMatch!!!!</Form.Message>
          <Form.Message match="valueMissing">valueMissing!!!!</Form.Message>
        </StyledField>

        <StyledField name="password">
          <Form.Label>비밀번호</Form.Label>
          <StyledControl
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            required
          />
        </StyledField>

        <StyledField name="passwordCheck">
          <Form.Label>비밀번호 확인</Form.Label>
          <StyledControl
            type="password"
            name="passwordCheck"
            placeholder="비밀번호를 입력해주세요"
            required
          />
        </StyledField>

        <StyledField name="description">
          <Form.Label>자기소개</Form.Label>
          <StyledControl name="description" style={{ padding: "0" }}>
            <StyledTextArea placeholder="자기소개를 입력해주세요" />
          </StyledControl>
        </StyledField>

        <ButtonContainer>
          <StyledSubmit type="submit">제출하기</StyledSubmit>
          <StyledSubmit type="reset">초기화</StyledSubmit>
        </ButtonContainer>
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

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;
