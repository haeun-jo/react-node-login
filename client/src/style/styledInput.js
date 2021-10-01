import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 280px;
  padding: 10px 0;
  margin: 5px 0;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #999;
  outline: none;
  background: transparent;
`;

function StyledInput({ ...children }) {
  return <Input {...children} />;
}

export default StyledInput;
