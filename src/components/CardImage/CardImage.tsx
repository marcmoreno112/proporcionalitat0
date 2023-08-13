import { FilmData } from "../../types";
import { imagesUrl } from "../../utils/urls";
import CardImageStyled from "./CardImageStyled";

interface CardImageProps {
  film: FilmData;
  isLazy?: "eager" | "lazy";
}

const CardImage = ({ film, isLazy }: CardImageProps): React.ReactElement => {
  const imageUrl = `${imagesUrl}${film.poster_path}`;

  return (
    <CardImageStyled
      alt={film.title}
      src={imageUrl}
      width={300}
      height={450}
      loading={isLazy}
    />
  );
};

export default CardImage;
