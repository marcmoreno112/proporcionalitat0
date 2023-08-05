import { styled } from "styled-components";

const DetailStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0.98;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 1.2rem;

  .detail {
    &-sections {
      max-width: 300px;
      max-height: 450px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    &-title {
      color: ${(props) => props.theme.colors.primary};
      word-wrap: break-word;
      text-transform: uppercase;
      font-size: 2rem;

      &-container {
        max-width: 100%;
      }
    }

    &-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      &_textarea {
        resize: none;
        height: 100px;
        overflow: auto;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.primary};
      }

      &_select {
        width: 100%;
        font-family: inherit;
        padding: 10px;
        border-radius: 8px;
        border-right: 16px solid transparent;
        border-color: transparent;
        background-color: ${(props) => props.theme.colors.primary};
        color: white;
      }
    }
  }
`;

export default DetailStyled;
