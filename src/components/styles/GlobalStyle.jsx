import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.light};
    background: ${(props) => props.theme.backgroundColour};
    font-family: "Roboto", sans-serif;
    height: 100%;
  }

  h1, h2, h3 {
    font-family: "Lora";
  }
`;

export default GlobalStyle;
