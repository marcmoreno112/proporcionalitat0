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
  }

  .now-playing {
    width: 350px;
    height: 250px;

    @media (min-width: 1200px) {
      position: fixed;
      left: 40px;
      transform: translate(0, 40%);
    }
  }
`;

export default SearchPageStyled;
