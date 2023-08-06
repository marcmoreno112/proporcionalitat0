import CardList from "../../components/CardList/CardList";
import { useAppSelector } from "../../store";
import titles from "../../utils/titles";
import MyListPageStyled from "./MyListPageStyled";

const MyListPage = (): React.ReactElement => {
  const { filmsRated } = useAppSelector((state) => state.filmsState);

  return (
    <MyListPageStyled>
      <h1 className="page-title">{titles.myList}</h1>

      <CardList films={filmsRated} />
    </MyListPageStyled>
  );
};

export default MyListPage;
