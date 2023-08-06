import { styled } from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 2 rem;
  color: ${(props) => props.theme.colors.primary};
  width: 100%;

  .active {
    color: ${(props) => props.theme.colors.feedbackError};
  }
`;

export default NavbarStyled;
