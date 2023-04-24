import RegisterForm from "../../components/RegisterForm/Registerform";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <div>
      <RegisterPageStyled>
        <div className="wrap-container">
          <div className="wrap-container__text text">
            <h1 className="text__title">Sign Up</h1>
            <h2 className="text__description">
              Welcome to your Techno Playlist creator, which will make accompany
              your mood for music. Let’s create account now
            </h2>
          </div>
        </div>
        <div className="gradient-style"></div>
      </RegisterPageStyled>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
