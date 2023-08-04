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
        placeholder="Type a part of the film title"
      />
    </SearchStyled>
  );
};

export default Search;
