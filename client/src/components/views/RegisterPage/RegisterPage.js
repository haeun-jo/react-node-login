import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";

import StyledBackground from "../../../style/styledBackground";
import StyledInput from "../../../style/styledInput";
import StyledForm from "../../../style/styledForm";
import StyledButton from "../../../style/styledButton";
import StyledTitle from "../../../style/styledTitle";

function RegisterPage(props) {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const { email, name, password, confirmPassword } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: email,
      name: name,
      password: password,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("Failed to sign up");
      }
    });
  };

  return (
    <StyledBackground>
      <StyledForm onSubmit={onSubmit}>
        <StyledTitle>Sign Up</StyledTitle>
        <label>Email </label>
        <StyledInput
          type="email"
          name="email"
          placeholder="Enter Email"
          autoComplete="off"
          onChange={onChange}
          value={email}
        />
        <label>Name </label>
        <StyledInput
          type="text"
          name="name"
          placeholder="Enter Name"
          autoComplete="off"
          onChange={onChange}
          value={name}
        />
        <label>Password </label>
        <StyledInput
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={onChange}
          value={password}
        />
        <label>Confirm Password </label>
        <StyledInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={onChange}
          value={confirmPassword}
        />
        <br />
        <StyledButton>submit</StyledButton>
      </StyledForm>
    </StyledBackground>
  );
}

export default withRouter(RegisterPage);
