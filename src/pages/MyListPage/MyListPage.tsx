import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { changeTitleTextActionCreator } from "../../store/films/filmsSlice";
import titles from "../../utils/titles";
import MyListPageStyled from "./MyListPageStyled";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import Question from "../../components/MyListCardList/Question";
import styled from "styled-components";

const MyListPage = (): React.ReactElement => {
  const RefreshButton = styled.button`
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #007bff;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  `;

  const refreshPage = () => {
    window.location.reload();
  };

  const { filmsRated } = useAppSelector((state) => state.proporState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const changeTitleTextAction = changeTitleTextActionCreator("");

    dispatch(changeTitleTextAction);
  }, [dispatch]);

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400 ? setShowTopButton(true) : setShowTopButton(false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <MyListPageStyled>
      <h1 className="page-title">{titles.myList}</h1>

      {showTopButton && <ScrollToTopButton actionOnClick={goToTop} />}

      {filmsRated.length === 0 && (
        <h2 className="no-rated-films-message">{titles.emptyMylist}</h2>
      )}

      <Question films={filmsRated} />

      <RefreshButton onClick={refreshPage}>OTRO!</RefreshButton>
    </MyListPageStyled>
  );
};

export default MyListPage;
