import styled from "styled-components";

const LoaderStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .dot-spinner {
    --uib-size: 200px;
    --uib-speed: 0.9s;
    --uib-color: #d2c8c8;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--uib-size);
    width: var(--uib-size);
  }

  .dot-spinner__dot {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
  }

  .dot-spinner__dot::before {
    content: "";
    height: 20%;
    width: 20%;
    border-radius: 50%;
    background-color: var(--uib-color);
    transform: scale(0);
    opacity: 0.5;
    animation: pulse calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  }

  .dot-spinner__dot:nth-child(2) {
    transform: rotate(45deg);
  }

  .dot-spinner__dot:nth-child(2)::before {
    animation-delay: calc(var(--uib-speed) * -0.875);
  }

  .dot-spinner__dot:nth-child(3) {
    transform: rotate(90deg);
  }

  .dot-spinner__dot:nth-child(3)::before {
    animation-delay: calc(var(--uib-speed) * -0.75);
  }

  .dot-spinner__dot:nth-child(4) {
    transform: rotate(135deg);
  }

  .dot-spinner__dot:nth-child(4)::before {
    animation-delay: calc(var(--uib-speed) * -0.625);
  }

  .dot-spinner__dot:nth-child(5) {
    transform: rotate(180deg);
  }

  .dot-spinner__dot:nth-child(5)::before {
    animation-delay: calc(var(--uib-speed) * -0.5);
  }

  .dot-spinner__dot:nth-child(6) {
    transform: rotate(225deg);
  }

  .dot-spinner__dot:nth-child(6)::before {
    animation-delay: calc(var(--uib-speed) * -0.375);
  }

  .dot-spinner__dot:nth-child(7) {
    transform: rotate(270deg);
  }

  .dot-spinner__dot:nth-child(7)::before {
    animation-delay: calc(var(--uib-speed) * -0.25);
  }

  .dot-spinner__dot:nth-child(8) {
    transform: rotate(315deg);
  }

  .dot-spinner__dot:nth-child(8)::before {
    animation-delay: calc(var(--uib-speed) * -0.125);
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(0);
      opacity: 0.5;
    }

    50% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default LoaderStyled;
