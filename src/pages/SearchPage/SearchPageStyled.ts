import { styled } from "styled-components";

const SearchPageStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  .page-title {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default SearchPageStyled;
