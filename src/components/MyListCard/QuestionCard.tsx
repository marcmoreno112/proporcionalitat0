import { useCallback, useState } from "react";
import { Question } from "../../types";
// import CardImage from "../CardImage/CardImage";
import CardTitle from "../CardTitle/CardTitle";
import MyListCardStyled from "./MyListCardStyled";
import QuestionComponent from "./QuestionComponent";
import FormulaBifurcator1 from "./FormulaBifurcator";
interface MyListCardProps {
  question: Question;
}

const QuestionCard = ({ question }: MyListCardProps): React.ReactElement => {
  const [isQuestion1Completed, setIsQuestion1Completed] =
    useState<boolean>(false);

  const [isEnunciadoUnderstood, setIsEnunciadoUnderstood] =
    useState<boolean>(true);

  // const toggleQuestion1 = (isQuestionUnderstood: boolean) => {
  //   setIsQuestion1Completed((prev) => !prev);
  //   setIsEnunciadoUnderstood(isQuestionUnderstood);
  // };

  const toggleQuestion1 = useCallback((isQuestionUnderstood: boolean) => {
    // Lógica para manejar el toggle
    setIsQuestion1Completed((prev) => !prev);
    setIsEnunciadoUnderstood(isQuestionUnderstood);
  }, []); // Dependencias vacías para que no se redefina

  const enunciado = isEnunciadoUnderstood
    ? question.enunciado
    : question.enunciadoFeedback;

  const [isQuestion2Completed, setIsQuestion2Completed] =
    useState<boolean>(false);

  const toggleQuestion2 = () => {
    setIsQuestion2Completed((prev) => !prev);
  };

  const toggleAnswer = () => {
    return;
  };

  return (
    <MyListCardStyled>
      <CardTitle title={enunciado} />

      <QuestionComponent
        question={question.p1.enunciado}
        correctAnswer={question.p1.respuestaCorrecta}
        incorrectAnswer={question.p1.respuestaIncorrecta}
        correctFeedback={question.p1.feedbackCorrecto}
        incorrectFeedback={question.p1.feedbackIncorrecto}
        onToggle={toggleQuestion1}
      />

      {isQuestion1Completed && (
        <QuestionComponent
          question={question.p2.enunciado}
          correctAnswer={question.p2.respuestaCorrecta}
          incorrectAnswer={question.p2.respuestaIncorrecta}
          correctFeedback={question.p2.feedbackCorrecto}
          incorrectFeedback={question.p2.feedbackIncorrecto}
          onToggle={toggleQuestion2}
        />
      )}

      {isQuestion2Completed && (
        <FormulaBifurcator1
          formulaType={question.fórmula.formulaType}
          correctAnswer={question.fórmula.respuestaCorrecta}
          onToggle={toggleAnswer}
          question={question}
        />
      )}

      {/* <CardImage film={question} isLazy={isLazy} /> */}
    </MyListCardStyled>
  );
};

export default QuestionCard;
