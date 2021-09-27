import React from "react";
import styled from "styled-components";
import { colors } from "../utils/theme";

export default function TeamMemberCard(props) {
  return (
    <Container>
      <Box photo={props.photo}></Box>
      <TeamMemberName>{props.name}</TeamMemberName>
      <TeamMemberTitle>{props.title}</TeamMemberTitle>
      <TeamMemberDesc>{props.bio}</TeamMemberDesc>
    </Container>
  );
}

const Container = styled.div`
  width: 282px;
  height: 535px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${colors.font.black};
  font-family: "Avenir";
`;

const Box = styled.div`
  width: 282px;
  height: 282px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${props => props.photo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const TeamMemberName = styled.h4`
  margin-bottom: 0;
`;

const TeamMemberTitle = styled.h5`
  margin: 0;
  font-weight: normal;
`;

const TeamMemberDesc = styled.p`
  border-top: solid 1px ${colors.font.black};
  padding-top: 1em;
  text-align: left;
  font-size: 14px;
`;
