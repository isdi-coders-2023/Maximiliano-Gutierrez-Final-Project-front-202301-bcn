import ButtonFormStyled from "./ButtonFormStyled";

interface ButtonProps {
  text: string;
  isDisabled: boolean;
  action?: () => void;
}

const ButtonForm = ({ text, isDisabled, action }: ButtonProps): JSX.Element => {
  return (
    <ButtonFormStyled disabled={isDisabled} onClick={action}>
      {text}
    </ButtonFormStyled>
  );
};

export default ButtonForm;
