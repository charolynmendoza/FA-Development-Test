import React from "react";
import styled from "styled-components";
import { colors } from "../utils/theme";

export default function DropDown() {
  return (
    <DropDownContainer>
      <NavItem>Subnav Item 1</NavItem>
      <NavItem>Subnav Item 2</NavItem>
      <NavItem>Subnav Item 3</NavItem>
      <NavItem>Subnav Item 4 with a Wrapping Second Line</NavItem>
      <NavItem>Subnav Item 5</NavItem>
    </DropDownContainer>
  );
}

const DropDownContainer = styled.div`
  width: 150%;
  background-color: ${colors.yellow};
  position: absolute;
  top: 3.25em;
`;

const NavItem = styled.div`
  padding: 0.5em 1.5em;
  font-weight: 500;
  font-size: 1em;
  line-height: 1.5em;
  text-decoration: none;
  list-style-type: none;
  color: ${colors.font.yellow};
  cursor: pointer;

  &:hover {
    background-color: ${colors.lightYellow};
  }
`;
