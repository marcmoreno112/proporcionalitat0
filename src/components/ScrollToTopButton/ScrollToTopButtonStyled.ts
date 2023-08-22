import { styled } from "styled-components";

const ScrollToTopButtonStyled = styled.div`
  position: fixed;
  bottom: 40px;
  right: 25px;
  z-index: 20;

  .scroll-to-top-image {
    border: 2px solid transparent;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    color: blue;
    cursor: pointer;
    animation: movebtn 3s ease-in-out infinite;
    transition: all 0.5s ease-in-out;

    @keyframes movebtn {
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
      background: #fff;
      color: black;
      border: 2px solid black;
    }
  }
`;

export default ScrollToTopButtonStyled;
