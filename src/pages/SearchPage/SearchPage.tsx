import pageTitles from "../../utils/pageTitles";
import SearchPageStyled from "./SearchPageStyled";

const SearchPage = (): React.ReactElement => {
  return (
    <SearchPageStyled>
      <h1 className="page-title">{pageTitles.search}</h1>
    </SearchPageStyled>
  );
};

export default SearchPage;
