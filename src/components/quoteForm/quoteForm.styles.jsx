import styled from "styled-components";
import { color } from "theme";
import { logoRed } from "theme/color";
import { device } from "theme/media";
import {
  heading1,
  heading2,
  heading3,
  paragraph1,
  paragraph2,
} from "theme/typography";

export const Textarea = styled.textarea`
  width: calc(100% - 200px);
  background-color: #fff;
  box-shadow: inset 2px 2px 5px 0 rgb(85 97 136 / 20%);
  border: 1px solid rgba(85, 97, 136, 0.2);
  border-radius: 12px;
  display: inline-block;
  padding: 15px;
  margin-bottom: 45px;
  resize: none;
  vertical-align: top;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

export const BasicInfoInputContainer = styled(InputContainer)`
  width: 100%;

  @media ${device.tablet} {
    width: 70%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentPart = styled.div``;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const InputDescription = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 30%;
    padding-right: 30px;
  }
`;

export const DescriptionTitle = styled.h2`
  ${heading1};
`;

export const DescriptionContent = styled.p`
  ${paragraph1};
  margin-top: 14px;
`;

export const InputTitle = styled.span`
  ${heading3};
  margin-bottom: 24px;
`;

export const InputValue = styled.span`
  align-self: center;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  ${heading1}
  min-width: 40px;
  height: 40px;
  color: #0c226e;
  opacity: 0.2;
  background-color: #fff;
  box-shadow: inset 2px 2px 5px 0 #556188;
  border: 1px solid #556188;
  border-radius: 12px;
  margin-top: 15px;
  padding: 0 5px;
`;

export const InputNotification = styled.p`
  height: 30px;
  width: 100%;
  text-align: center;
  margin-top: 14px;
`;

export const SliderWrapper = styled.div`
  min-height: 45px;
  width: 100%;
`;

export const InputValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

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

export const PrefixInput = styled(ContactInput)`
  width: 35px;
  margin-right: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const PhoneNumberInput = styled(ContactInput)`
  width: 215px;
`;

export const SummaryAnswer = styled(InputTitle)``;

export const SummaryQuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SummaryContainer = styled.div`
  display: flex;
`;

export const ValInputContainer = styled.div``;

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

export const Text = styled.p`
  ${paragraph1}
  margin: 0 0 10px;
  text-align: center;
`;
