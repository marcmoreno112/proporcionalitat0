import React from "react";
import FormulaRegla3 from "./FormulaRegla3";

interface FormulaComponentProps {
  formulaType: "regla3" | "regla3inversa";
  onToggle: () => void; // Función para hacer toggle
  correctAnswer: string[]; // Respuesta correcta como array de strings
}

const FormulaComponent: React.FC<FormulaComponentProps> = ({
  formulaType,
  onToggle,
  correctAnswer,
}) => {
  switch (formulaType) {
    case "regla3":
      return (
        <FormulaRegla3 correctAnswer={correctAnswer} onToggle={onToggle} />
      );

    case "regla3inversa":
      // Aquí puedes agregar la lógica para "regla3inversa"
      return <div>{/* Contenido para "regla3inversa" */}</div>;

    default:
      return null; // Corregido el uso de default
  }
};

export default FormulaComponent;
