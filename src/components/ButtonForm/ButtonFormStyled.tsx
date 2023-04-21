import styled, { css, keyframes } from "styled-components";

interface ButtonFormStyledProps {
  enabled: boolean;
}

const growAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const shakeAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
`;

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

  ${({ enabled }) =>
    enabled &&
    css`
      animation: ${growAnimation} 0.3s linear forwards,
        ${shakeAnimation} 0.5s linear 0.3s forwards;
    `}
`;

export default ButtonFormStyled;
