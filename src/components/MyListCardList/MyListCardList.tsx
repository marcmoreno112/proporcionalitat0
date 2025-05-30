import { RatedFilmData } from "../../types";
import MyListCard from "../MyListCard/MyListCard";
import MyListCardListStyled from "./MyListCardListStyled";

interface MyListCardListProps {
  films: RatedFilmData[];
}

const MyListCardList = ({ films }: MyListCardListProps): React.ReactElement => {
  // Aquí deberá ser un número aleatorio
  const selectedQuestion = films[0];

  return (
    <MyListCardListStyled>
      <MyListCard
        film={selectedQuestion}
        key={selectedQuestion.id}
        isLazy={"lazy"}
      ></MyListCard>
    </MyListCardListStyled>
  );
};

export default MyListCardList;
