import styled, { createGlobalStyle } from "styled-components";
import { device } from "./media";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family:'Roboto', sans-serif;

  body{
    margin: 0;
    margin-bottom: 10rem;

    *{
      color: #003049;
    }
    
  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    
    &:focus{
      box-shadow: none;
    }
  }
  
  button{
    &:focus{
      box-shadow: none;
    }
  }
  div[role="button"]{
    &:focus{
      box-shadow: none;
    }
  }
  input{
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  }
  }
`;

export const Container = styled.div`
  margin: auto;
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;

  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.laptop} {
    max-width: 1200px;
  }

  @media ${device.desktop} {
    max-width: 1600px;
  }
`;

// mobileS: "320px",
// mobileM: "375px",
// mobileL: "425px",
// tablet: "768px",
// laptop: "1024px",
// laptopL: "1440px",
// desktop: "2560px",