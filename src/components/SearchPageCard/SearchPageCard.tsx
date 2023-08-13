import { useAppDispatch } from "../../store";
import { selectDetailFilmActionCreator } from "../../store/films/filmsSlice";
import { FilmData } from "../../types";
import titles from "../../utils/titles";
import { errorImage } from "../../utils/urls";
import CardImage from "../CardImage/CardImage";
import CardTitle from "../CardTitle/CardTitle";
import SearchPageCardStyled from "./SearchPageCardStyled";

interface SearchPageCardProps {
  film: FilmData;
  isLazy: "eager" | "lazy";
}

const SearchPageCard = ({
  isLazy,
  film,
}: SearchPageCardProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const detailAction = () => {
    const selectDetailFilmAction = selectDetailFilmActionCreator(film);

    dispatch(selectDetailFilmAction);
  };

  return (
    <SearchPageCardStyled>
      <CardTitle releaseDate={film.release_date} title={film.title} />

      <button onClick={() => detailAction()}>
        {film.poster_path !== null ? (
          <CardImage film={film} isLazy={isLazy} />
        ) : (
          <img
            alt={titles.missingPosterPath}
            src={errorImage}
            width={300}
            height={450}
            className="card-image"
          />
        )}
      </button>
    </SearchPageCardStyled>
  );
};

export default SearchPageCard;
