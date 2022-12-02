import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;

  input {
    padding: 10px 20px;
    border-radius: 8px;
  }

  button {
    padding: 10px 20px;
    border-radius: 8px;
  }
`;

function TodoList() {
  const { register, handleSubmit } = useForm();

  const onValid = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onValid)}>
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("First Name", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("Last Name", { required: true, minLength: 10 })}
          placeholder="Last Name"
        />
        <input
          {...register("User Name", { required: true })}
          placeholder="User Name"
        />
        <input
          {...register("Password", { required: true })}
          placeholder="Password"
          type="password"
        />
        <input
          {...register("PasswordCheck", { required: true })}
          placeholder="PasswordCheck"
          type="password"
        />

        <button>Add</button>
      </Form>
    </div>
  );
}

export default TodoList;
