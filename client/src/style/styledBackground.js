import React from "react";
import styled from "styled-components";
import BG from "../assets/image/bg-2.jpg";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
`;

function StyledBackground({ children }) {
  return <Background img={BG}>{children}</Background>;
}

export default StyledBackground;
