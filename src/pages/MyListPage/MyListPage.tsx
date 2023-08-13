import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { changeTitleTextActionCreator } from "../../store/films/filmsSlice";
import titles from "../../utils/titles";
import MyListPageStyled from "./MyListPageStyled";
import MyListCardList from "../../components/MyListCardList/MyListCardList";

const MyListPage = (): React.ReactElement => {
  const { filmsRated } = useAppSelector((state) => state.filmsState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const changeTitleTextAction = changeTitleTextActionCreator("");

    dispatch(changeTitleTextAction);
  }, [dispatch]);

  return (
    <MyListPageStyled>
      <h1 className="page-title">{titles.myList}</h1>

      {filmsRated.length === 0 && <h2>{titles.emptyMylist}</h2>}

      <MyListCardList films={filmsRated} />
    </MyListPageStyled>
  );
};

export default MyListPage;
