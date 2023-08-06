import { FilmData } from "../../types";
import { imagesUrl } from "../../utils/urls";
import titles from "../../utils/titles";
import CardStyled from "./CardStyled";
import { useAppDispatch } from "../../store";
import { selectDetailFilmActionCreator } from "../../store/films/filmsSlice";

interface CardProps {
  film: FilmData;
}

const Card = ({
  film: {
    title: filmTitle,
    poster_path: posterPath,
    release_date: releaseDate,
    id,
  },
}: CardProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const imageUrl = `${imagesUrl}${posterPath}`;

  const errorImage = "images/errorImage.png";

  const detailAction = () => {
    const film: FilmData = {
      id,
      poster_path: posterPath,
      release_date: releaseDate,
      title: filmTitle,
    };

    const selectDetailFilmAction = selectDetailFilmActionCreator(film);

    dispatch(selectDetailFilmAction);
  };

  return (
    <CardStyled>
      <div className="card-title-container">
        <h2 className="card-title">{filmTitle}</h2>
      </div>
      <h3>{releaseDate}</h3>
      <button onClick={detailAction}>
        {posterPath ? (
          <img
            alt={filmTitle}
            src={imageUrl}
            width={300}
            height={450}
            className="card-image"
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
