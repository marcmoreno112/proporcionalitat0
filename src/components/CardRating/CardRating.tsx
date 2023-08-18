import CardRatingStyled from "./CardRatingStyled";

interface CardRatingProps {
  rate: string;
  comment: string;
}

const CardRating = ({ rate, comment }: CardRatingProps): React.ReactElement => {
  const generateRating = (rate: number) => {
    const stars = [];
    for (let index = 0; index < 5; index++) {
      stars.push(
        <img
          key={`star-${index}`}
          src={index < rate ? "/images/star.png" : "/images/empty-star.png"}
          width={32}
          height={32}
          alt="valoration"
        />
      );
    }
    return stars;
  };

  return (
    <CardRatingStyled>
      <div className="rating">{generateRating(Number(rate))}</div>

      <p className="comment">{comment}</p>
    </CardRatingStyled>
  );
};

export default CardRating;
