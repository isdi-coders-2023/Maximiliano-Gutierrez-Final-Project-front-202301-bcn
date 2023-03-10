import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, ::after, ::before {
  box-sizing: border-box;
}

body {
  margin: 0 auto;
  padding: 20px;
  background-color: #28333f;
  min-height: 100vh;
  font-family: ${(props) => props.theme.fonts.primary};
}

h1,h2, h3, h4, h5, h6{
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

a,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
