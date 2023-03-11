import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .wrap-container {
    display: flex;
    width: 100%;
    height: 400px;
    align-items: flex-end;
    justify-content: center;
    background: url(/images/logIn.webp);
    background-size: cover;
    background-position: center;
    border-radius: 0 0 10px 10px;

    &__text {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 10px;
    }

    .text__title {
      font-family: Verdana, sans-serif;
      font-size: 1.75rem;
    }

    .text__description {
      font-family: Verdana, sans-serif;
      font-size: 1.25rem;
      font-style: italic;
      font-weight: 400;
      line-height: 22.5px;
      padding-bottom: 10px;
    }
  }
`;

export default LoginPageStyled;
