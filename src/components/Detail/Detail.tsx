import { FilmData } from "../../types";
import { errorImage, imagesUrl } from "../../utils/urls";
import titles from "../../utils/titles";
import DetailStyled from "./DetailStyled";

interface DetailProps {
  film: FilmData;
}

const Detail = ({
  film: {
    poster_path: posterPath,
    title: filmTitle,
    release_date: releaseDate,
  },
}: DetailProps): React.ReactElement => {
  const imageUrl = `${imagesUrl}${posterPath}`;

  return (
    <DetailStyled>
      <section>
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
            alt={titles.missingPosterPath}
            src={errorImage}
            width={300}
            height={450}
            className="card-image"
          />
        )}
      </section>

      <section>
        <div className="card-title-container">
          <h2 className="card-title">{filmTitle}</h2>
        </div>
        <h3>{releaseDate}</h3>
        <form>
          <label htmlFor="rating">Rating</label>
          <input type="text" name="rating" id="rating" autoComplete="off" />
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment" autoComplete="off" />
        </form>
      </section>
    </DetailStyled>
  );
};

export default Detail;
