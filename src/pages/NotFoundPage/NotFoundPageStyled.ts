import { styled } from "styled-components";

const NotFoundPageStyled = styled.main`
  width: 100%;

  .page-title {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default NotFoundPageStyled;
