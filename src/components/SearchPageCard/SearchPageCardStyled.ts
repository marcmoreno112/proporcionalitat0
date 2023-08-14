import { styled } from "styled-components";

const SearchPageCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  padding: 10px;
`;

export default SearchPageCardStyled;
