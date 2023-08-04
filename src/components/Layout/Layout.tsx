import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled>
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
