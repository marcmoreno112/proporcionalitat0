import ScrollToTopButtonStyled from "./ScrollToTopButtonStyled";

const ScrollToTopButton = (): React.ReactElement => {
  return (
    <ScrollToTopButtonStyled>
      <button className="scroll-to-top-button">
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
