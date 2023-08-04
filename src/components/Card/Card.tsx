import { FilmData } from "../../types";
import CardStyled from "./CardStyled";

interface CardProps {
  film: FilmData;
}

const Card = ({
  film: { filmTitle, posterUrl, releaseDate },
}: CardProps): React.ReactElement => {
  return (
    <CardStyled>
      <div className="card-title-container">
        <h2 className="card-title">{filmTitle}</h2>
      </div>
      <h3>{releaseDate}</h3>
      <img
        alt={filmTitle}
        src={posterUrl}
        width={300}
        height={450}
        className="card-image"
      />
    </CardStyled>
  );
};

export default Card;
