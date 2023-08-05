import { useEffect, useState } from "react";
import placeholders from "../../utils/placeholders";
import SearchStyled from "./SearchStyled";
import { useDispatch } from "react-redux";
import { changeTitleTextActionCreator } from "../../store/films/filmsSlice";

const Search = (): React.ReactElement => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const debounce = setTimeout(() => {
      const changeTitleTextAction = changeTitleTextActionCreator(searchValue);

      dispatch(changeTitleTextAction);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [dispatch, searchValue]);

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
