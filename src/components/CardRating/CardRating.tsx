interface CardRatingProps {
  rate: string;
  comment: string;
}

const CardRating = ({ rate, comment }: CardRatingProps): React.ReactElement => {
  return (
    <>
      <h3 className="card-rating">Rating: {rate}/5</h3>
      <p className="card-comment">{comment}</p>
    </>
  );
};

export default CardRating;
