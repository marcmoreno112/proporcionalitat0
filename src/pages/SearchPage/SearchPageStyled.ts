import { styled } from "styled-components";

const SearchPageStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .page-title {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.secondary};
    background-color: white;
  }

  .now-playing {
    width: 350px;
    height: 250px;
  }
`;

export default SearchPageStyled;
