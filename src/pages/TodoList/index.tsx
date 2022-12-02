import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

  input {
    padding: 10px 20px;
  }

  button {
    padding: 10px 20px;
  }
`;

function TodoList() {
  const { register, watch } = useForm();

  console.log("watch", watch());

  return (
    <div>
      <Form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("First Name")} placeholder="First Name" />
        <input {...register("Last Name")} placeholder="Last Name" />
        <input {...register("User Name")} placeholder="User Name" />
        <input {...register("Password")} placeholder="Password" />
        <input {...register("PasswordCheck")} placeholder="PasswordCheck" />

        <button>Add</button>
      </Form>
    </div>
  );
}

export default TodoList;
