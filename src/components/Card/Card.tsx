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
      <h2>{filmTitle}</h2>
      <img alt={filmTitle} src={posterUrl} width={300} height={450} />
      <h3>{releaseDate}</h3>
    </CardStyled>
  );
};

export default Card;
