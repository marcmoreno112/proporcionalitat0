import { styled } from "styled-components";

const NotFoundPageStyled = styled.main`
  margin-top: 100px;

  .page-title {
    font-size: 5rem;
    color: ${(props) => props.theme.colors.secondary};
    background-color: white;
  }
`;

export default NotFoundPageStyled;
