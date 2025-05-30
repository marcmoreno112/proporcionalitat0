import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";
// import Header from "../Header/Header";
// import Navbar from "../Navbar/Navbar";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      {/* <Navbar /> */}
      {/* <Header /> */}
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
