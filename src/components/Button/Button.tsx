interface ButtonProps {
  actionOnClick: () => void;
  className?: string;
  text: string;
}

const Button = ({
  actionOnClick,
  text,
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className} onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
