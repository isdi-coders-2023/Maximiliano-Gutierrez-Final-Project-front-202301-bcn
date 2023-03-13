import ButtonLoginStyled from "./ButtonLoginStyled";

interface ButtonProps {
  className: string;
  action?: () => void;
  text: number | string;
  isDisabled: boolean;
}

const ButtonLogin = ({
  className,
  text,
  action,
  isDisabled,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonLoginStyled
      onClick={action}
      className={className}
      disabled={isDisabled}
    >
      {text}
    </ButtonLoginStyled>
  );
};

export default ButtonLogin;
