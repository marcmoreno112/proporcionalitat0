import { useState } from "react";
import placeholders from "../../utils/placeholders";
import SearchStyled from "./SearchStyled";

const Search = (): React.ReactElement => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;

    setSearchValue(searchText);
  };

  return (
    <SearchStyled>
      <input
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        className="input"
        placeholder={placeholders.searchInput}
        value={searchValue}
        onChange={handleSearchChange}
      />
    </SearchStyled>
  );
};

export default Search;
