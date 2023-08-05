interface ButtonProps {
  actionOnClick?: () => void;
  className?: string;
  text: string;
  type?: "submit";
}

const Button = ({
  actionOnClick,
  text,
  className,
  type,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className} onClick={actionOnClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
