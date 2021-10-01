import React from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 280px;
  display: flex;
  flex-direction: column;
`;

function StyledForm({ ...children }) {
  return <Form {...children} />;
}

export default StyledForm;
