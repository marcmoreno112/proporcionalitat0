import { styled } from "styled-components";

const MyListCardListStyled = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default MyListCardListStyled;
