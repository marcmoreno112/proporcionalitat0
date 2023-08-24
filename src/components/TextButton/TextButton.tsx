interface ButtonProps {
  actionOnClick?: () => void;
  className?: string;
  text: string;
  type?: "submit";
  isDisabled?: boolean;
}

const TextButton = ({
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

export default TextButton;
