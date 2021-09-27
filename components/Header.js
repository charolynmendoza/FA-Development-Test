import React, { useState } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import { colors } from "../utils/theme";

export default function Header(props) {
  const [dropDownVisibility, setDropDownVisibility] = useState(null);
  const headerSection = props.data.find(section => section.html_id === "header");

  return (
    <Container>
      <ContentContainer>
        <a href="#">
          <HeaderLogo
            src="/img/faths-logo.png"
            rel="alternate"
            alt="First American Eagle Logo"
          />
        </a>
        <NavContainer>
          {headerSection.main_menu.map(item => (
            <NavSectionContainer
            key={item.label}
            onMouseEnter={() => setDropDownVisibility(item.label)}
            onMouseLeave={() => setDropDownVisibility(null)}
          >
            <NavSection>{item.label}</NavSection>
            {dropDownVisibility === item.label ? <DropDown /> : null}
          </NavSectionContainer>
          ))}
        </NavContainer>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.header`
  max-width: 100vw;
  max-height: 95px;
  background-color: ${colors.blue};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  flex: 1;
  max-width: 934px;
  margin: auto;
  padding: 20px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
`;

const HeaderLogo = styled.img`
  flex: 1;
  max-width: 288px;
  height: 60px;
  margin-bottom: 15px;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
`;

const NavSectionContainer = styled.div`
  position: relative;

  &:hover {
    background-color: ${colors.yellow};
    color: ${colors.font.yellow};

    h2 {
      color: ${colors.font.yellow};
    }
  }
`;

const NavSection = styled.h2`
  margin: 0;
  padding: 0.5em 1em;
  color: ${colors.font.white};
  font-family: "Avenir";
  font-weight: 500;
  font-size: 1.5em;
  text-decoration: none;
`;
