import { styled } from "styled-components";

const SearchStyled = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;

  .input {
    padding: 18px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    color: white;
    font-size: 1.2rem;

    &::placeholder {
      color: #cabfbf;
    }
  }
`;

export default SearchStyled;
