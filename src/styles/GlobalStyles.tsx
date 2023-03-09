import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, ::after, ::before {
  box-sizing: border-box;
}

body {
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
  font-family: ${(props) => props.theme.fonts.primary};
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

a, :active, :visited{
  text-decoration: none;
}
`;

export default GlobalStyles;
