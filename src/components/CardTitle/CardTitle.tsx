import CardTitleStyled from "./CardTitleStyled";

interface CardTitleProps {
  title: string;
  releaseDate: string;
}

const CardTitle = ({
  title,
  releaseDate,
}: CardTitleProps): React.ReactElement => {
  return (
    <CardTitleStyled>
      <div className="card-title-container">
        <h2 className="card-title">{title}</h2>
      </div>
      <h3>Release: {releaseDate}</h3>
    </CardTitleStyled>
  );
};

export default CardTitle;
