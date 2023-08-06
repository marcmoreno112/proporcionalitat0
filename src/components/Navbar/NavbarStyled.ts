import { styled } from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  position: fixed;
  top: 0;
  background-color: white;
  padding: 20px;

  .active {
    color: ${(props) => props.theme.colors.active};
  }
`;

export default NavbarStyled;
