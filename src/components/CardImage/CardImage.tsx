import { FilmData } from "../../types";
import titles from "../../utils/titles";
import { imagesUrl } from "../../utils/urls";
import CardImageStyled from "./CardImageStyled";

interface CardImageProps {
  film: FilmData;
  isLazy?: "eager" | "lazy";
}

const CardImage = ({ film, isLazy }: CardImageProps): React.ReactElement => {
  const correctImageUrl = `${imagesUrl}${film.poster_path}`;

  const wrongImageUrl = "images/errorImage.png";

  const imageUrl = film.poster_path === null ? wrongImageUrl : correctImageUrl;

  const correctAlText = film.title;

  const wrongAltText = titles.missingPosterPath;

  const altText = film.poster_path === null ? wrongAltText : correctAlText;

  return (
    <CardImageStyled
      alt={altText}
      src={imageUrl}
      width={300}
      height={450}
      loading={isLazy}
    />
  );
};

export default CardImage;
