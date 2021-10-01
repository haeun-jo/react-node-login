import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

function StyledTitle({ children }) {
  return <Title>{children}</Title>;
}

export default StyledTitle;
