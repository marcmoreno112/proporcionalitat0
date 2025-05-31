import { Question as QuestionType } from "../../types";
import QuestionCard from "../MyListCard/QuestionCard";

interface MyListCardListProps {
  films: QuestionType[];
}

const Question = ({ films }: MyListCardListProps): React.ReactElement => {
  const seleccionarElementoAleatorio = (array: QuestionType[]) => {
    if (array.length === 0) {
      return undefined; // Retorna undefined si el array está vacío
    }
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
  };

  const selectedQuestion = seleccionarElementoAleatorio(films);

  // const selectedQuestion = films[0];

  return (
    <>
      {selectedQuestion && (
        <QuestionCard
          question={selectedQuestion}
          key={selectedQuestion.id}
          // isLazy={"lazy"}
        />
      )}
    </>
  );
};

export default Question;
