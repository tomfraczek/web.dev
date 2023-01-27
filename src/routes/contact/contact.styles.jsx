import styled from "styled-components";
import { color } from "theme";
import { heading3, paragraph1 } from "theme/typography";

export const ContactContainer = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
`;

export const ContactContent = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const DescriptionContainer = styled.div``;

export const Description = styled.p`
  ${paragraph1}
  font-size: 14px;
  line-height: 24px;
`;

export const FormContainer = styled.div`
  background: #efebea;
  border-radius: 5px;
  box-shadow: 0 30px 30px rgb(36 50 66 / 14%);
  padding: 16px 32px 32px;
`;

export const FormHeader = styled.h2``;

export const ContactForm = styled.form``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

export const InputTitle = styled.span`
  ${heading3};
  margin-bottom: 7px;
`;

export const ValInputContainer = styled.div``;

export const ContactInput = styled.input`
  width: 300px;
  background-color: #fff;
  box-shadow: inset 2px 2px 5px 0 rgb(85 97 136 / 20%);
  border: 1px solid rgba(85, 97, 136, 0.2);
  border-radius: 12px;
  display: inline-block;
  padding: 15px;
  resize: none;
  vertical-align: top;
  margin-right: 20px;
`;

export const InputError = styled.p`
  color: ${color.logoRed};
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin: 3px 0px 0px;
  min-height: 20px;
  display: flex;
  flex-direction: column;

  span {
    color: ${color.logoRed};
    min-height: 20px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PrefixInput = styled(ContactInput)`
  width: 35px;
  margin-right: 20px;
`;
export const PhoneNumberInput = styled(ContactInput)`
  width: 215px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  background-color: #fff;
  box-shadow: inset 2px 2px 5px 0 rgb(85 97 136 / 20%);
  border: 1px solid rgba(85, 97, 136, 0.2);
  border-radius: 12px;
  display: inline-block;
  padding: 15px;
  margin-bottom: 45px;
  resize: none;
  vertical-align: top;
  font-family: "Roboto", sans-serif;
  margin-top: 7px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
  }
`;

export const TextareaContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const FormInfo = styled.p`
  margin: 14px 0 10px 0;
  color: ${color.logoBlue};
`;
export const PrivacyCheckContainer = styled.div`
  display: flex;
  align-items: center;
`;
