import styled, { createGlobalStyle } from "styled-components";
import { device, width } from "./media";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family:'Roboto', sans-serif;

  body{
    margin: 0;

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
  padding: 0 1rem;

  @media ${device.mobile} {
    max-width: ${width.mobile};
  }
  @media ${device.tablet} {
    max-width: ${width.tablet};
  }
  @media ${device.laptop} {
    max-width: ${width.laptop};
    padding: 0;
  }
  @media ${device.desktop} {
    max-width: ${width.desktop};
  }
`;
