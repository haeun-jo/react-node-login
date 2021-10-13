import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";

import StyledBackground from "../../../style/styledBackground";
import StyledInput from "../../../style/styledInput";
import StyledForm from "../../../style/styledForm";
import StyledButton from "../../../style/styledButton";
import StyledTitle from "../../../style/styledTitle";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });

    setInputs({
      email: "",
      password: "",
    });
  };

  return (
    <StyledBackground>
      <StyledForm onSubmit={onSubmit}>
        <StyledTitle>Sign In</StyledTitle>
        <label>Email </label>
        <StyledInput
          type="email"
          name="email"
          placeholder="Enter Email"
          autoComplete="off"
          onChange={onChange}
          value={email}
        />
        <label>Password </label>
        <StyledInput
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={onChange}
          value={password}
        />
        <br />
        <StyledButton>submit</StyledButton>
      </StyledForm>
    </StyledBackground>
  );
}

export default withRouter(LoginPage);
