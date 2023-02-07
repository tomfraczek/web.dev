import styled from "styled-components";
import { color } from "theme";
import { heading3, paragraph1 } from "theme/typography";

export const TabDescriptionContainer = styled.div`
  margin-bottom: 1rem;
`;

export const TabsContainer = styled.div``;

export const DescriptionTitle = styled.h2`
  text-align: center;
`;

export const DescriptionContainer = styled.div`
  padding-top: 50px;
  background: ${color.white};
`;

export const DetailTitle = styled.h2`
  ${heading3}
`;

export const DetailDescription = styled.p`
  ${paragraph1};
  color: ${color.black};
`;

export const DescriptionContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const ImageContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 500px; ;
`;

export const TabContent = styled.div`
  width: 60%;
`;

export const Table = styled.table`
  width: 100%;
  margin-left: auto;
  margin-right: 24px;
  tr:nth-child(2n + 1) {
    background: #fafafa;
  }

  td {
    padding: 10px;
    text-align: center;
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;

    &:first-child {
      width: 80%;
      text-align: left;
    }

    img {
      width: auto;
      margin: 0;
      height: auto;
    }
  }
`;
