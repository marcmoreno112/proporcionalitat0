import ScrollToTopButtonStyled from "./ScrollToTopButtonStyled";

interface ScrollToTopButtonProps {
  actionOnClick: () => void;
}

const ScrollToTopButton = ({
  actionOnClick,
}: ScrollToTopButtonProps): React.ReactElement => {
  return (
    <ScrollToTopButtonStyled>
      <button className="scroll-to-top-button" onClick={actionOnClick}>
        <img
          src="images/arrow-up.svg"
          alt="arrow-up"
          className="scroll-to-top-image"
        />
      </button>
    </ScrollToTopButtonStyled>
  );
};

export default ScrollToTopButton;
