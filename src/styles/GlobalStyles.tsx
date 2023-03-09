import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, ::after, ::before {
  box-sizing: border-box;
}

body {
  padding: 20px;
  background-color: #fff;
  font-family: var(--main-font);
  min-height: 100vh;
}

h1,h2{
  padding: 0;
  margin: 0;
}

ol, ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

:root {
  --regLogin-color-button: #7B50F3;
  --main-color-button: #06A0B5;
  --sigin-signup-color-text: #A0F5E1;
  --main-font: "Verdana", sans-serif;
  --header-font: "Century-gothic", sans-serif;
}

`;

export default GlobalStyles;
