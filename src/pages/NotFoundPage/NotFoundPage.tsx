import titles from "../../utils/titles";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <h1 className="page-title">{titles.notFoundPage}</h1>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
