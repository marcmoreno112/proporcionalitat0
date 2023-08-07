import { useEffect } from "react";
import CardList from "../../components/CardList/CardList";
import { useAppDispatch, useAppSelector } from "../../store";
import { changeTitleTextActionCreator } from "../../store/films/filmsSlice";
import titles from "../../utils/titles";
import MyListPageStyled from "./MyListPageStyled";

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

      <CardList films={filmsRated} />
    </MyListPageStyled>
  );
};

export default MyListPage;
