import styled from "styled-components";

const ButtonLoginStyled = styled.button`
  background-color: ${(props) => props.theme.colors.regLoginColorButton};
  height: 3.25rem;
  width: 23.9rem;
  border-radius: 6px;
  color: #fff;
  font-style: italic;
  font-size: 1.25rem;
  width: 100%;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.45);
`;
export default ButtonLoginStyled;
