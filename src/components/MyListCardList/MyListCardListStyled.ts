import { styled } from "styled-components";

const SearchPageCardListStyled = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default SearchPageCardListStyled;
