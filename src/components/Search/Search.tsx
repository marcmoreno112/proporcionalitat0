import { useEffect, useState } from "react";
import SearchStyled from "./SearchStyled";
import { useDispatch } from "react-redux";
import { changeTitleTextActionCreator } from "../../store/films/filmsSlice";
import titles from "../../utils/titles";

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

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchInput = document.getElementById("search");

    if (searchInput) {
      searchInput.blur();
    }
  };

  return (
    <SearchStyled onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        className="input"
        placeholder={titles.searchInputPlaceholder}
        value={searchValue}
        onChange={handleSearchChange}
      />
    </SearchStyled>
  );
};

export default Search;
