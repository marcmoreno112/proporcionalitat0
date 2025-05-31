import React, { useState } from "react";
import { Question } from "../../types";
import QuestionComponent from "./QuestionComponent";
import AumentoDismiFormula from "./AumentoDismiFormula";

interface FormulaComponentProps {
  type: "aumento" | "disminución";
  question: Question;
}

const PorcentajesYAumentosComponent: React.FC<FormulaComponentProps> = ({
  type,
  question,
}) => {
  const [isQuestion1Completed, setIsQuestion1Completed] =
    useState<boolean>(false);

  const toggleQuestion1 = () => {
    setIsQuestion1Completed((prev) => !prev);
  };

  return (
    <>
      {question.p3 && (
        <QuestionComponent
          question={question.p3.enunciado}
          correctAnswer={question.p3.respuestaCorrecta}
          incorrectAnswer={question.p3.respuestaIncorrecta}
          correctFeedback={question.p3.feedbackCorrecto}
          incorrectFeedback={question.p3.feedbackIncorrecto}
          onToggle={toggleQuestion1}
        />
      )}

      {isQuestion1Completed && (
        <AumentoDismiFormula
          aumentoDismi={type}
          correctAnswer={question.fórmula.respuestaCorrecta}
        />
      )}
    </>
  );
};

export default PorcentajesYAumentosComponent;
