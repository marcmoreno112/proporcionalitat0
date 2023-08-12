import { styled } from "styled-components";

const CardRatingStyled = styled.div`
  .rating {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.4rem;
  }

  .comment {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.3rem;
  }
`;

export default CardRatingStyled;
