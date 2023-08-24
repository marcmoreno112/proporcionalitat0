import { styled } from "styled-components";

const NavbarStyled = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 1.7rem;
  color: ${(props) => props.theme.colors.primary};
  max-width: 1440px;
  position: fixed;
  top: 5px;
  background-color: white;
  padding: 15px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  margin: 5px;
  box-shadow: 2px 2px 10px ${(props) => props.theme.colors.primary};

  .active {
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.primary};
    text-decoration-thickness: 3px;
  }
`;

export default NavbarStyled;
