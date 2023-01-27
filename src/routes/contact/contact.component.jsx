import { useState } from "react";
import { Container } from "theme/global-styles";
import { logoRed } from "theme/color";
import Button from "@mui/material/Button";

import {
  ContactContainer,
  ContactContent,
  ImageContainer,
  Image,
  DescriptionContainer,
  Description,
  FormContainer,
  ContactForm,
  FormHeader,
  InputContainer,
  InputTitle,
  ValInputContainer,
  ContactInput,
  InputError,
  InputWrapper,
  PrefixInput,
  PhoneNumberInput,
  TextareaContainer,
  Textarea,
  FormInfo,
  PrivacyCheckContainer,
} from "./contact.styles";

import hero from "routes/contact/img/contact.jpg";
import { Link } from "react-router-dom";
import { HighlightRed } from "theme/media";
import { Checkbox } from "@mui/material";

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prefix, setPrefix] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [textarea, setTextarea] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [prefixError, setPrefixError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [textareaError, setTextareaError] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const firstNameValidate = () => {
    const regexp = /^[a-z ,.'-]+$/i;
    // console.log(regexp, regexp.exec(phoneNumber) === null);
    if (regexp.exec(firstName) === null) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };

  const lastNameValidate = () => {
    const regexp = /^[a-z ,.'-]+$/i;
    // console.log(regexp, regexp.exec(phoneNumber) === null);
    if (regexp.exec(lastName) === null) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };

  const phoneNoValidate = () => {
    const regexp = /[0-9]+$/;

    if (regexp.exec(phoneNumber) === null) {
      setPhoneNoError(true);
    } else {
      setPhoneNoError(false);
    }
  };

  const emailValidate = () => {
    const regexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regexp.exec(email) === null) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const prefixNoValidate = () => {
    const regexp = /\+[0-9]+$/;
    if (regexp.exec(prefix) === null) {
      setPrefixError(true);
    } else {
      setPrefixError(false);
    }
  };

  const handleSubmit = () => {
    console.log("message sent!");
  };

  const contactErrors =
    emailError ||
    prefixError ||
    phoneNoError ||
    firstNameError ||
    lastNameError;

  const contactsEmpty =
    firstName === "" || lastName === "" || email === "" || textarea === "";
  return (
    <Container>
      <ContactContainer>
        <ContactContent>
          <ImageContainer>
            <Image src={hero} />
          </ImageContainer>

          <DescriptionContainer>
            <Description>
              Looking for more information? Submit your information and a webdev
              representative will folow up with you as soon as possible.
            </Description>
            <Description>
              You can also request a <Link to="/quote">free quote</Link>
            </Description>
          </DescriptionContainer>
        </ContactContent>

        <FormContainer>
          <FormHeader>Talk to our team</FormHeader>
          <ContactForm>
            <FormInfo>
              Fields marked with an asterisk (*) are required.
            </FormInfo>
            <InputWrapper>
              <InputContainer>
                <InputTitle>
                  First Name<HighlightRed>*</HighlightRed>
                </InputTitle>
                <ValInputContainer>
                  <ContactInput
                    placeholder="e.g., John"
                    value={firstName}
                    style={{ borderColor: firstNameError && logoRed }}
                    onChange={(e) => setFirstName(e.target.value)}
                    onBlur={firstNameValidate}
                    type="text"
                  />
                  <InputError>
                    {firstNameError &&
                      "Enter valid first name - characters 'A - Z'"}
                  </InputError>
                </ValInputContainer>
              </InputContainer>

              <InputContainer>
                <InputTitle>
                  Last Name<HighlightRed>*</HighlightRed>
                </InputTitle>
                <ValInputContainer>
                  <ContactInput
                    value={lastName}
                    placeholder="Smith"
                    style={{ borderColor: lastNameError && logoRed }}
                    onBlur={lastNameValidate}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                  />
                  <InputError>
                    {lastNameError &&
                      "Enter valid last name - characters 'A - Z'"}
                  </InputError>
                </ValInputContainer>
              </InputContainer>
            </InputWrapper>

            <InputContainer>
              <InputTitle>
                Email Address<HighlightRed>*</HighlightRed>
              </InputTitle>
              <ValInputContainer>
                <ContactInput
                  style={{ borderColor: emailError && logoRed }}
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={emailValidate}
                />
                <InputError>
                  {emailError && "Enter valid email address - name@company.com"}
                </InputError>
              </ValInputContainer>
            </InputContainer>

            <InputContainer>
              <InputTitle>Phone Number</InputTitle>
              <ValInputContainer>
                <InputWrapper>
                  <PrefixInput
                    value={prefix}
                    style={{ borderColor: prefixError && logoRed }}
                    onChange={(e) => setPrefix(e.target.value)}
                    onBlur={(e) => prefixNoValidate(e.target.value)}
                    type="text"
                    placeholder="+48"
                  />
                  <PhoneNumberInput
                    value={phoneNumber}
                    style={{ borderColor: phoneNoError && logoRed }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onBlur={phoneNoValidate}
                    placeholder="123456789"
                    type="text"
                  />
                </InputWrapper>
                <InputError>
                  {prefixError && (
                    <span>
                      Prefix Number: Please use numbers [0 - 9] and '+' sign for
                      prefix only
                    </span>
                  )}
                  {phoneNoError && (
                    <span>Phone Number: Please use numbers [0 - 9] only</span>
                  )}
                </InputError>
              </ValInputContainer>
            </InputContainer>

            <TextareaContainer>
              <InputTitle>
                What would you like to discuss?<HighlightRed>*</HighlightRed>
              </InputTitle>
              <ValInputContainer>
                <Textarea
                  placeholder="Tell us about your company and provide some details about a project or process you would like to work on with us."
                  value={textarea}
                  onChange={(e) => setTextarea(e.target.value)}
                />
                <InputError>
                  {textareaError && (
                    <span>Phone Number: Please use numbers [0 - 9] only</span>
                  )}
                </InputError>
              </ValInputContainer>
            </TextareaContainer>
            <PrivacyCheckContainer>
              <Checkbox value={privacyAccepted} />
              <Description>
                By checking the box and clicking "Submit", you are agreeing to
                Asana's Privacy Statement.<HighlightRed>*</HighlightRed>
              </Description>
            </PrivacyCheckContainer>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 1, mr: 1 }}
            >
              Submit
            </Button>
          </ContactForm>
        </FormContainer>
      </ContactContainer>
    </Container>
  );
};
