import { useEffect, useState } from "react";
import useFilms from "../../hooks/useFilms/useFilms";
import pageTitles from "../../utils/pageTitles";
import SearchPageStyled from "./SearchPageStyled";
import CardList from "../../components/CardList/CardList";
import { FilmData } from "../../types";
import Search from "../../components/Search/Search";
import { useAppSelector } from "../../store";

const SearchPage = (): React.ReactElement => {
  const { getFilms } = useFilms();

  const [films, setFilms] = useState<FilmData[]>([]);

  const { titleText } = useAppSelector((state) => state.filmsState);

  useEffect(() => {
    (async () => {
      const fetchData = await getFilms(titleText);

      if (!fetchData) {
        return;
      }

      setFilms(fetchData.results);
    })();
  }, [getFilms, titleText]);

  return (
    <SearchPageStyled>
      <h1 className="page-title">{pageTitles.search}</h1>
      <Search />
      <CardList films={films} />
    </SearchPageStyled>
  );
};

export default SearchPage;
