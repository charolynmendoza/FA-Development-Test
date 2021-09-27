import React from "react";
import styled from "styled-components";
import { colors } from "../utils/theme";

export default function Footer(props) {
  const footerSection = props.data.find(
    (section) => section.html_id === "footer"
  );

  return (
    <Container>
      <FooterRow>
        <ServicesNav href="#" size="default">
          First American Title
          <span style={{ marginLeft: "1em" }}>{"\\"}</span>
        </ServicesNav>
        <ServicesNav href="#" size="default">
          Homebuilder Services
        </ServicesNav>
      </FooterRow>
      <FooterRow>
        {footerSection.upper_links.map((item) => (
          <ServicesNav key={item.label} href={item.href} weight="bold">
            {item.label}
          </ServicesNav>
        ))}
      </FooterRow>
      <FooterRow style={{ marginBottom: 0 }}>
        {footerSection.lower_links.map((item) => (
          <ServicesNav
            key={item.label}
            href={item.label}
            weight="normal"
            size="default"
          >
            {item.label}
          </ServicesNav>
        ))}
      </FooterRow>
      <FooterRow style={{ marginTop: 0 }}>
        <FooterNote>
          <p
            dangerouslySetInnerHTML={{ __html: footerSection.copyright_text }}
          ></p>
          <p>{footerSection.legal_text}</p>
        </FooterNote>
      </FooterRow>
    </Container>
  );
}

const Container = styled.footer`
  max-width: 934px;
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const FooterRow = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: "Avenir";
  color: ${colors.font.black};
  text-align: left;
`;

const ServicesNav = styled.a`
  margin: 0 1em;
  text-decoration: none;
  font-size: ${(props) => (props.size === "default" ? "1em" : "1.2em")};
  font-weight: ${(props) => (props.weight ? props.weight : "normal")};
  color: ${colors.font.black};

  &:first-child {
    margin: 0;
  }

  &:visited {
    color: ${colors.font.black};
  }

  &:hover {
    text-decoration: underline;
  }
`;

const FooterNote = styled.div`
  font-size: 0.667em;
  line-height: 1.5em;
`;
