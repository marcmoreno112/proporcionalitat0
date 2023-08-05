import { FilmData } from "../../types";
import { errorImage, imagesUrl } from "../../utils/urls";
import titles from "../../utils/titles";
import DetailStyled from "./DetailStyled";
import { useState } from "react";
import Button from "../Button/Button";

interface DetailProps {
  film: FilmData;
  closeAction: () => void;
  saveAction: () => void;
}

const Detail = ({
  film: {
    poster_path: posterPath,
    title: filmTitle,
    release_date: releaseDate,
  },
  closeAction,
  saveAction,
}: DetailProps): React.ReactElement => {
  const imageUrl = `${imagesUrl}${posterPath}`;

  const [selectedValue, setSelectedValue] = useState("");

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;

    setSelectedValue(selectedOption);
  };

  const [commentValue, setCommentValue] = useState("");

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const commentText = event.target.value;

    setCommentValue(commentText);
  };

  const actionOnCloseButton = () => {
    closeAction();

    setSelectedValue("");

    setCommentValue("");
  };

  const actionOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    saveAction();

    actionOnCloseButton();
  };

  const isDisabled = !commentValue || !selectedValue;

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
        <div className="close-button-container">
          <Button
            actionOnClick={actionOnCloseButton}
            text="Close"
            className="close-button"
          />
        </div>

        <div className="detail-title-container">
          <h2 className="detail-title">{filmTitle}</h2>
        </div>

        <h3>{releaseDate}</h3>

        <form className="detail-form" onSubmit={actionOnSubmit}>
          <select
            name="rating"
            id="rating"
            className="detail-form_select"
            value={selectedValue}
            onChange={handleRatingChange}
          >
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
            value={commentValue}
            onChange={handleCommentChange}
          />

          <Button
            type="submit"
            text="Save"
            className="save-button"
            isDisabled={isDisabled}
          />
        </form>
      </section>
    </DetailStyled>
  );
};

export default Detail;
