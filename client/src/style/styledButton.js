import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 65%;
  padding: 7px 20px;
  cursor: pointer;
  display: block;
  margin: 15px auto 0;
  background: inherit;
  border: 1px solid #999;
  outline: none;
  border-radius: 5px;
  &:hover {
    background: rgba(153, 153, 153, 0.5);
    transition: 0.3s;
  }
`;

function StyledButton({ children }) {
  return <Button type="submit">{children}</Button>;
}

export default StyledButton;
