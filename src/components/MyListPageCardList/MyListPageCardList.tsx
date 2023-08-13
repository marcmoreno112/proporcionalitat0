import { RatedFilmData } from "../../types";
import MyListCard from "../MyListPageCard/MyListPageCard";
import MyListCardListStyled from "./MyListPageCardListStyled";

interface MyListCardListProps {
  films: RatedFilmData[];
}

const MyListCardList = ({ films }: MyListCardListProps): React.ReactElement => {
  return (
    <MyListCardListStyled>
      {films.map((film) => (
        <MyListCard film={film} key={film.id} isLazy={"lazy"}></MyListCard>
      ))}
    </MyListCardListStyled>
  );
};

export default MyListCardList;
