import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import { colors } from "../utils/theme";

export default function ContactForm(props) {
  return (
    <Container>
      <Formik
        initialValues={{ email: "", name: "", company: "", phone: "" }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            {props.data.form_fields.map((field) => (
              <Input
                key={field.html_id}
                type={field.input_type}
                name={field.html_id}
                placeholder={field.label}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[field.html_id]}
              />
            ))}
            <PrivacyLink
              href={props.data.privacy_link.href}
              alt="Privacy Notice"
            >
              {props.data.privacy_link.text}
            </PrivacyLink>
            <SubmitButton type="submit">
              Submit
              <SubmitButtonIcon />
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
`;

const Input = styled.input`
  width: 290px;
  height: 45px;
  margin: 10px 15px 10px 0px;
  padding-left: 10px;
  border-radius: 5px;
  border: solid 1px ${colors.lightGray};
  font-size: 14px;
  font-weight: 500;
`;

const PrivacyLink = styled.a`
  color: ${colors.font.black};
  text-align: left;
  text-decoration: none;
  grid-column: span 2;
  grid-row: 3;

  &:hover {
    text-decoration: underline;
  }
`;

const SubmitButton = styled.button`
  width: 130px;
  height: 62px;
  border: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row nowrap;
  align-self: flex-end;
  background-color: ${colors.yellow};
  color: ${colors.font.yellow};
  font-size: 18px;
  font-weight: 500;
  grid-column: 2;
  grid-row: 4;
  justify-self: flex-end;
`;

const SubmitButtonIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("/svg/right-arrow.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
