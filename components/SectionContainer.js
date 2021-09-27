import React from "react";
import styled from "styled-components";
import {breakpoints} from "../utils/theme";

export default function SectionContainer(props) {
  return <Container style={props.style}>{props.children}</Container>;
}

const Container = styled.div`
  max-width: 934px;
  margin: auto;
  margin-bottom: 70px;
  padding: 70px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: ${breakpoints.sm}) {
    max-width: 738px;
}
`;
