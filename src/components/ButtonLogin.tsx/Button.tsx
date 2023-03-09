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
  return <></>;
};

export default ButtonLogin;
