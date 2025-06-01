import React from "react";
import FormulaRegla3 from "./Regla3Formula";
import { Formula, Question } from "../../types";
import PorcentajesYAumentosComponent from "./PorcentajesYAumentosComponent";
import PorcentajesComponent from "./Porcentajes";
import FormulaRegal3Inversa from "./Regla3InversaFormula";

interface FormulaComponentProps {
  formulaType: Formula;
  onToggle: () => void; // Función para hacer toggle
  correctAnswer: string[]; // Respuesta correcta como array de strings
  question: Question;
}

const FormulaBifurcator1: React.FC<FormulaComponentProps> = ({
  formulaType,
  onToggle,
  correctAnswer,
  question,
}) => {
  switch (formulaType) {
    case "regla3":
      return (
        <>
          {/* {question.fórmula.magnitudes && ( */}
          <FormulaRegla3
            correctAnswer={correctAnswer}
            onToggle={onToggle}
            magnitudes={question.fórmula.magnitudes}
          />
          {/* )} */}
        </>
      );

    case "regla3inversa":
      return (
        <FormulaRegal3Inversa
          correctAnswer={correctAnswer}
          onToggle={onToggle}
          magnitudes={question.fórmula.magnitudes}
        />
      );

    case "aumento":
      return (
        <PorcentajesYAumentosComponent type={"aumento"} question={question} />
      );

    case "disminución":
      return (
        <PorcentajesYAumentosComponent
          type={"disminución"}
          question={question}
        />
      );

    case "%%":
      return (
        <PorcentajesComponent
          type={"%"}
          question={question}
          onToggle={onToggle}
        />
      );

    case "%total":
      return (
        <PorcentajesComponent
          type={"total"}
          question={question}
          onToggle={onToggle}
        />
      );

    case "%parcial":
      return (
        <PorcentajesComponent
          type={"parcial"}
          question={question}
          onToggle={onToggle}
        />
      );

    default:
      return null;
  }
};

export default FormulaBifurcator1;
