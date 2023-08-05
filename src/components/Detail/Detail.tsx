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
      <section className="detail-sections">
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

      <section className="detail-sections">
        <div className="detail-title-container">
          <h2 className="detail-title">{filmTitle}</h2>
        </div>
        <h3>{releaseDate}</h3>
        <form className="detail-form">
          <select name="rating" id="rating" className="detail-form_select">
            <option value="" disabled>
              Rate the film
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label htmlFor="comment">Comment</label>
          <textarea
            name="comment"
            id="comment"
            autoComplete="off"
            className="detail-form_textarea"
          />
        </form>
      </section>
    </DetailStyled>
  );
};

export default Detail;
