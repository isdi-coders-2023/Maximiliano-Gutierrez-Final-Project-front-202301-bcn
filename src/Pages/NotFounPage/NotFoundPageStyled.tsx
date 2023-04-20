import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 100%),
    rgba(0, 0, 0, 50.65%)
  );

  svg {
    max-width: 250px;
    background-color: #fff;
    border-radius: 15%;
  }

  .not-found {
    &__title {
      padding-bottom: 20px;
      font-size: 40px;
    }

    &__subtitle {
      padding-top: 20px;
      font-size: 30px;
    }

    &__go {
      padding-top: 20px;
      font-size: 20px;
      color: #fff;
    }

    &__link {
      color: ${(props) => props.theme.colors.mainColorButton};
    }

    &__gradient-style {
      position: absolute;
      width: 100%;
      height: 700px;
      left: 0px;
      top: 0px;
      background: linear-gradient(
        180deg,
        rgba(14, 14, 14, 0) 0%,
        rgba(16, 43, 45, 0.84) 36.26%,
        rgba(42, 28, 238, 0.84) 99.76%
      );
      mix-blend-mode: lighten;
      opacity: 0.2;
      transform: rotate(-180deg);
      z-index: -1;
    }
  }
`;

export default NotFoundPageStyled;
