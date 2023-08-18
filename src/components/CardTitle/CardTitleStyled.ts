import { styled } from "styled-components";

const CardTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;

  .card {
    &-container {
      max-width: 100%;
    }

    &-title {
      word-wrap: break-word;
      text-transform: uppercase;
      font-size: 2rem;
    }

    &-release {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export default CardTitleStyled;
