import { styled } from "styled-components";

const SearchStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;

  @media (min-width: 850px) {
    position: fixed;
    right: 20px;
  }

  .input {
    padding: 18px;
    border: 3px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.2rem;

    &::placeholder {
      color: #cabfbf;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 3px ${(props) => props.theme.colors.secondary};
    }
  }
`;

export default SearchStyled;
