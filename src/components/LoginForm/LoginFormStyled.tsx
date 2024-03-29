import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 20px;
  padding-top: 30px;
  background-color: #28333f;
  width: 100%;

  .login-form__title {
    color: rgba(240, 246, 255, 0.7);
    font-family: ${(props) => props.theme.fonts.primary};
    padding-left: 10px;
    padding-bottom: 6px;
    font-style: italic;
  }

  .container-email {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .login-form__section {
    width: 100%;
  }

  input {
    height: 64px;
    background-color: #313e55c7;
    border: none;
    border-radius: 10px;
    color: #fff;
    padding-left: 10px;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  .link {
    display: flex;
    flex-direction: column;
    color: rgba(255, 255, 255, 0.848);
    font-size: 1.43rem;
    font-weight: 300;
    font-style: italic;
    text-align: center;
  }

  .section {
    margin-bottom: 4.12rem;
  }

  a {
    color: ${(props) => props.theme.colors.siginSignupColor};
  }

  .login-form__field {
    font-size: 20px;
  }

  .login-form__title {
    font-size: 20px;
  }
`;

export default LoginFormStyled;
