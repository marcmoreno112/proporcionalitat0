import { Question as QuestionType } from "../../types";
import QuestionCard from "../MyListCard/QuestionCard";

interface MyListCardListProps {
  films: QuestionType[];
}

const Question = ({ films }: MyListCardListProps): React.ReactElement => {
  // Aquí deberá ser un número aleatorio
  const selectedQuestion = films[0];

  return (
    // <MyListCardListStyled>
    <QuestionCard
      question={selectedQuestion}
      key={selectedQuestion.id}
      // isLazy={"lazy"}
    ></QuestionCard>
    // </MyListCardListStyled>
  );
};

export default Question;
