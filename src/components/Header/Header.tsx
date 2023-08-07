import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        alt="Films logo"
        src="/images/logo.svg"
        className="logo"
        width={1493}
        height={400}
      />
    </HeaderStyled>
  );
};

export default Header;
