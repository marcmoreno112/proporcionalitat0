interface CardTitleProps {
  title: string;
  releaseDate: string;
}

const CardTitle = ({
  title,
  releaseDate,
}: CardTitleProps): React.ReactElement => {
  return (
    <>
      <div className="card-title-container">
        <h2 className="card-title">{title}</h2>
      </div>
      <h3>Release: {releaseDate}</h3>
    </>
  );
};

export default CardTitle;
