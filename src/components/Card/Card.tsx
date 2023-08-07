import { FilmData, RatedFilmData } from "../../types";
import { imagesUrl } from "../../utils/urls";
import titles from "../../utils/titles";
import CardStyled from "./CardStyled";
import { useAppDispatch } from "../../store";
import { selectDetailFilmActionCreator } from "../../store/films/filmsSlice";

interface CardProps {
  film: RatedFilmData | FilmData;
  isLazy: "lazy" | "eager";
}

const Card = ({ film, isLazy }: CardProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const isRatedFilm = "rate" in film && "comment" in film;

  const imageUrl = `${imagesUrl}${film.poster_path}`;

  const errorImage = "images/errorImage.png";

  const detailAction = () => {
    const selectDetailFilmAction = selectDetailFilmActionCreator(film);

    dispatch(selectDetailFilmAction);
  };

  return (
    <CardStyled>
      <div className="card-title-container">
        <h2 className="card-title">{film.title}</h2>
      </div>
      <h3>Release: {film.release_date}</h3>
      {isRatedFilm && (
        <>
          <h3 className="card-rating">Rating: {film.rate as string}/5</h3>
          <p className="card-comment">{film.comment as string}</p>
        </>
      )}
      <button onClick={detailAction}>
        {film.poster_path !== null ? (
          <img
            alt={film.title}
            src={imageUrl}
            width={300}
            height={450}
            className="card-image"
            loading={isLazy}
          />
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
    </CardStyled>
  );
};

export default Card;
