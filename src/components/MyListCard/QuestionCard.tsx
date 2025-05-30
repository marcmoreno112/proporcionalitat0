import { useState } from "react";
import { Question } from "../../types";
// import CardImage from "../CardImage/CardImage";
import CardTitle from "../CardTitle/CardTitle";
import MyListCardStyled from "./MyListCardStyled";
import QuestionComponent from "./QuestionComponent";
import FormulaComponent from "./FormulaComponent";

interface MyListCardProps {
  question: Question;
}

const QuestionCard = ({ question }: MyListCardProps): React.ReactElement => {
  const [isQuestion1Completed, setIsQuestion1Completed] =
    useState<boolean>(false);

  const toggleQuestion1 = () => {
    setIsQuestion1Completed((prev) => !prev);
  };

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
      <CardTitle title={question.enunciado} />

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
        <FormulaComponent
          formulaType={question.fórmula.formulaType}
          correctAnswer={question.fórmula.respuestaCorrecta}
          onToggle={toggleAnswer}
        />
      )}

      {/* <CardImage film={question} isLazy={isLazy} /> */}
    </MyListCardStyled>
  );
};

export default QuestionCard;
