import CardStyled from "./CardStyled";

interface CardProps {
  posterUrl: string;
  filmTitle: string;
  releaseDate: string;
}

const Card = ({
  posterUrl,
  filmTitle,
  releaseDate,
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
