import { styled } from "styled-components";

const CardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid;
  padding: 10px;

  .card {
    &-image {
      object-fit: contain;
    }

    &-title {
      word-wrap: break-word;
      text-transform: uppercase;

      &-container {
        max-width: 100%;
      }
    }
  }
`;

export default CardStyled;
