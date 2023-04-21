import ButtonFormStyled from "./ButtonFormStyled";

interface ButtonProps {
  ariaLabel?: string;
  text: string;
  isDisabled: boolean;
  action?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const ButtonForm = ({
  text,
  isDisabled,
  action,
  className,
  ariaLabel,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonFormStyled
      disabled={isDisabled}
      onClick={action}
      className={className}
      aria-label={ariaLabel}
      enabled={!isDisabled}
    >
      {text}
    </ButtonFormStyled>
  );
};

export default ButtonForm;
