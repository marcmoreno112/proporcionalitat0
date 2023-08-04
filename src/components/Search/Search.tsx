import placeholders from "../../utils/placeholders";
import SearchStyled from "./SearchStyled";

const Search = (): React.ReactElement => {
  return (
    <SearchStyled>
      <input
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        className="input"
        placeholder={placeholders.searchInput}
      />
    </SearchStyled>
  );
};

export default Search;
