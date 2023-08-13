import { FilmData } from "../../types";
import SearchPageCard from "../SearchPageCard/SearchPageCard";
import SearchPageCardListStyled from "./SearchPageCardListStyled";

interface SearchPageCardListProps {
  films: FilmData[];
}

const SearchPageCardList = ({
  films,
}: SearchPageCardListProps): React.ReactElement => {
  return (
    <SearchPageCardListStyled>
      {films.map((film) => (
        <SearchPageCard
          film={film}
          key={film.id}
          isLazy={"lazy"}
        ></SearchPageCard>
      ))}
    </SearchPageCardListStyled>
  );
};

export default SearchPageCardList;
