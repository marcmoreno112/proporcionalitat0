import { FilmData } from "../../types";
import CardStyled from "./CardStyled";

interface CardProps {
  film: FilmData;
}

const imagesUrl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2";

const Card = ({
  film: {
    title: filmTitle,
    poster_path: posterPath,
    release_date: releaseDate,
  },
}: CardProps): React.ReactElement => {
  const imageUrl = `${imagesUrl}${posterPath}`;

  const errorImage = "images/errorImage.png";

  return (
    <CardStyled>
      <div className="card-title-container">
        <h2 className="card-title">{filmTitle}</h2>
      </div>
      <h3>{releaseDate}</h3>
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
          alt={"Missing"}
          src={errorImage}
          width={300}
          height={450}
          className="card-image"
        />
      )}
    </CardStyled>
  );
};

export default Card;
