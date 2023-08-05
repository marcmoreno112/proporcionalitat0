interface ButtonProps {
  actionOnClick?: () => void;
  className?: string;
  text: string;
  type?: "submit";
  isDisabled?: boolean;
}

const Button = ({
  actionOnClick,
  text,
  className,
  type,
  isDisabled,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={className}
      onClick={actionOnClick}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
