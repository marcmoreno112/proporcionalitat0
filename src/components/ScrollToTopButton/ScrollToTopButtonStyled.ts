import { styled } from "styled-components";

const ScrollToTopButtonStyled = styled.div`
  position: fixed;
  bottom: 40px;
  right: 25px;
  z-index: 1;

  .scroll-to-top-image {
    border-radius: 50%;
    border: 2px solid transparent;
    height: 50px;
    width: 50px;
    cursor: pointer;
    animation: movebutton 3s ease-in-out infinite;
    transition: all 0.5s ease-in-out;

    @keyframes movebutton {
      0% {
        transform: translateY(0px);
      }
      25% {
        transform: translateY(20px);
      }
      50% {
        transform: translateY(0px);
      }
      75% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }

  .scroll-to-top-button {
    :hover {
      animation: none;
      border: 2px solid ${(props) => props.theme.colors.primary};
    }
  }
`;

export default ScrollToTopButtonStyled;
