import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addRatedFilmActionCreator,
  selectDetailFilmActionCreator,
} from "../../store/films/filmsSlice";
import { FilmData, RatedFilmData } from "../../types";
import { errorImage, imagesUrl } from "../../utils/urls";
import titles from "../../utils/titles";
import DetailStyled from "./DetailStyled";
import Button from "../Button/Button";

interface DetailProps {
  film: FilmData;
}

const Detail = ({
  film: {
    poster_path: posterPath,
    title: filmTitle,
    release_date: releaseDate,
    id,
  },
}: DetailProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const imageUrl = `${imagesUrl}${posterPath}`;

  const { filmsRated } = useAppSelector((state) => state.filmsState);

  const existingRateFilm = filmsRated.filter((film) => film.id === id);

  const initialSelectedState =
    existingRateFilm.length > 0 ? existingRateFilm[0].rate : "";

  const [selectedValue, setSelectedValue] = useState(initialSelectedState);

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;

    setSelectedValue(selectedOption);
  };

  const initialCommentState =
    existingRateFilm.length > 0 ? existingRateFilm[0].comment : "";

  const [commentValue, setCommentValue] = useState(initialCommentState);

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const initialCommentText = event.target.value;

    const cleanedCommentText = initialCommentText.replace(/\s+/g, "");

    const finalCommentText = !cleanedCommentText
      ? cleanedCommentText
      : initialCommentText;

    setCommentValue(finalCommentText);
  };

  const closeAction = () => {
    const initialDetailFilmState = {} as FilmData;

    const resetDetailFilmAction = selectDetailFilmActionCreator(
      initialDetailFilmState
    );

    dispatch(resetDetailFilmAction);
  };

  const actionOnCloseButton = () => {
    setSelectedValue("");

    setCommentValue("");

    closeAction();
  };

  const saveAction = () => {
    const ratedFilm: RatedFilmData = {
      poster_path: posterPath,
      id,
      release_date: releaseDate,
      title: filmTitle,
      comment: commentValue,
      rate: selectedValue,
    };

    const saveRatedFilmAction = addRatedFilmActionCreator(ratedFilm);

    dispatch(saveRatedFilmAction);
  };

  const actionOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    saveAction();

    actionOnCloseButton();
  };

  const isDisabled = !selectedValue;

  return (
    <DetailStyled>
      <section className="detail-sections">
        {posterPath ? (
          <img
            alt={filmTitle}
            src={imageUrl}
            width={300}
            height={450}
            className="detail-image"
          />
        ) : (
          <img
            alt={titles.missingPosterPath}
            src={errorImage}
            width={300}
            height={450}
            className="detail-image"
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

        <h3>Release date: {releaseDate}</h3>

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
