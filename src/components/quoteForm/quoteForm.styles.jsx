import styled from "styled-components";
import { device } from "theme/media";
import {
  heading1,
  heading2,
  heading3,
  paragraph1,
  paragraph2,
} from "theme/typography";

export const ButtonsContainer = styled.div`
  display: flex;
`;

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
  margin-bottom: 50px;

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
`;
