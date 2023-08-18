import { styled } from "styled-components";

const CardRatingStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 8px;

  .rating {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.4rem;
  }

  .comment {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.3rem;
    max-width: 60vh;
  }
`;

export default CardRatingStyled;
