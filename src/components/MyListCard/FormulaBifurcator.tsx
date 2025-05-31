import React from "react";
import FormulaRegla3 from "./Regla3Formula";
import { Formula, Question } from "../../types";
import PorcentajesYAumentosComponent from "./PorcentajesYAumentosComponent";

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
        <FormulaRegla3 correctAnswer={correctAnswer} onToggle={onToggle} />
      );

    // case "regla3inversa":
    //   return <Inversa />;

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

    // case "%%":
    //   return <FormulaPercent type={"%"} />;

    // case "%total":
    //   return <FormulaPercent type={"total"} />;

    // case "%parcial":
    //   return <FormulaPercent type={"parcial"} />;

    default:
      return null;
  }
};

export default FormulaBifurcator1;
