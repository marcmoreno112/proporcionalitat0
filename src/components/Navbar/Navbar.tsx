import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";
import paths from "../../router/paths";

const Navbar = (): React.ReactElement => {
  return (
    <NavbarStyled>
      <NavLink to={paths.search}>Search</NavLink>
      <NavLink to={paths.myList}>My list</NavLink>
    </NavbarStyled>
  );
};

export default Navbar;
