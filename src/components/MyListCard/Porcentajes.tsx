import React, { useState } from "react";
import { Question } from "../../types";
import ExplicacionPorcentaje from "./ExplicacionPorcentaje";
import PorcentajeFormula from "./PorcentajeFormula";

interface FormulaComponentProps {
  type: "total" | "%" | "parcial";
  question: Question;
  onToggle: () => void; // Función para hacer toggle
}

const PorcentajesComponent: React.FC<FormulaComponentProps> = ({
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
      {question.fórmula.planteamientoPreFormula && (
        <ExplicacionPorcentaje
          correctAnswer={question.fórmula.planteamientoPreFormula}
          onToggle={toggleQuestion1}
        />
      )}

      {question.fórmula.planteamientoPreFormula && isQuestion1Completed && (
        <PorcentajeFormula
          correctAnswer={question.fórmula.respuestaCorrecta}
          type={type}
          planteamiento={question.fórmula.planteamientoPreFormula}
        />
      )}
    </>
  );
};

export default PorcentajesComponent;
