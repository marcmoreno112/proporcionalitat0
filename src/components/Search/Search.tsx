import { useState } from "react";
import placeholders from "../../utils/placeholders";
import SearchStyled from "./SearchStyled";
import { useDispatch } from "react-redux";
import { changeTitleTextActionCreator } from "../../store/films/filmsSlice";

const Search = (): React.ReactElement => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;

    setSearchValue(searchText);

    const changeTitleTextAction = changeTitleTextActionCreator(searchText);

    dispatch(changeTitleTextAction);
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
