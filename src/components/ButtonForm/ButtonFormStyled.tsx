import styled from "styled-components";

interface ButtonFormStyledProps {
  enabled: boolean;
}

const ButtonFormStyled = styled.button.attrs<ButtonFormStyledProps>(
  ({ enabled }) => ({
    enabled,
  })
)<ButtonFormStyledProps>`
  background-color: ${(props) =>
    props.enabled ? "green" : props.theme.colors.mainColorButton};
  font-family: ${(props) => props.theme.fonts.secondary};
  height: 3.5rem;
  width: 60%;
  color: #fff;
  font-size: 1.5rem;
  font-style: oblique;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 40px;

  :disabled {
    opacity: 70%;
  }
`;

export default ButtonFormStyled;
