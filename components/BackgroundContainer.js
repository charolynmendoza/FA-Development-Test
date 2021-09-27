import React from "react";
import styled from "styled-components";

export default function BackgroundContainer(props) {
  return (
    <Container className={props.className} backgroundImg={props.backgroundImg}>
      {props.children}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.backgroundImg});
  background-position: top center;
`;
