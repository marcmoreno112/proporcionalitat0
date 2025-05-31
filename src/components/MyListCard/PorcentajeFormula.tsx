import React, { useState } from "react";
import { Igual, Resultado, PorcentajeX } from "./ElementosFórmulas";
import {
  Fraccion1y1,
  Fraccion1y1ValoresFijos,
  Fraccion2y1SinConmutativaArriba,
  Fraccion2y1ValoresFijos,
} from "./Fracción";
import CardTitle from "../CardTitle/CardTitle";

interface FormulaComponentProps {
  correctAnswer: string[]; // Respuesta correcta como array de strings
  planteamiento: string[]; // Respuesta correcta como array de strings
  type: "%" | "parcial" | "total";
}

const PorcentajeFormula: React.FC<FormulaComponentProps> = ({
  correctAnswer,
  type,
  planteamiento,
}) => {
  const [result, setResult] = useState<string>("");
  const [answered, setAnswered] = useState<boolean>(false); // Estado para saber si la pregunta ha sido respondida
  const [userAnswers, setUserAnswers] = useState<string[]>(
    Array(correctAnswer.length).fill("")
  ); // Inicializar con la longitud correcta
  const [hasToShowCorrectAnswer, setHasToShowCorrectAnswer] =
    useState<boolean>(false);

  const checkAnswer = () => {
    if (answered) return; // No permitir responder si ya se ha respondido

    setAnswered(true); // Marcar como respondida

    const roundToDecimals = (value: string, decimals: number) => {
      const number = parseFloat(value.replace(",", ".")); // Reemplazar ',' por '.' y convertir a número
      return isNaN(number) ? null : Number(number.toFixed(decimals)); // Redondear a los decimales especificados
    };

    const isCorrect = userAnswers.every((answer, index) => {
      const userAnswerRounded = roundToDecimals(answer, 2); // Redondear a 2 decimales
      const correctAnswerRounded = roundToDecimals(correctAnswer[index], 2); // Redondear a 2 decimales

      // Comparar los valores redondeados y convertir a minúsculas para ignorar mayúsculas/minúsculas
      return (
        userAnswerRounded === correctAnswerRounded ||
        (typeof userAnswerRounded === "string" &&
          typeof correctAnswerRounded === "string" &&
          (userAnswerRounded as string).toLowerCase() ===
            (correctAnswerRounded as string).toLowerCase())
      );
    });

    if (isCorrect) {
      setResult("¡Respuesta correcta!");
      setHasToShowCorrectAnswer(false);
    } else {
      setResult("Respuesta incorrecta. Tenía que quedar así:");
      setHasToShowCorrectAnswer(true);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value; // Almacenar el valor como string
    setUserAnswers(newAnswers);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5px" }}>
      <CardTitle title="Ahora vamos a aplicar la fórmula:" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PorcentajeX valorX={type} />
        <Igual />
        <Fraccion2y1ValoresFijos
          numerador1={planteamiento[1]}
          numerador2={planteamiento[2]}
          denominador={planteamiento[3]}
          index={0}
        />
        <Igual />
        <Fraccion2y1SinConmutativaArriba
          index={1}
          answered={answered}
          handleInputChange={handleInputChange}
          correctIndex={[0, 1, 2]}
        />
        <Igual />
        <Fraccion1y1
          index={2}
          handleInputChange={handleInputChange}
          answered={answered}
          correctIndex={[3, 4]}
        />
        <Igual />
        <Resultado
          index={3}
          handleInputChange={handleInputChange}
          answered={answered}
          correctIndex={5}
        />
      </div>
      <button onClick={checkAnswer} style={buttonStyle} disabled={answered}>
        Comprobar Respuesta
      </button>
      {hasToShowCorrectAnswer ? (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "red" }}>
          {result}
        </p>
      ) : (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
          {result}
        </p>
      )}
      {hasToShowCorrectAnswer && (
        //   <Fraccion2y1ValoresFijos
        //     numerador1="%"
        //     numerador2="Abans"
        //     denominador="100"
        //     index={0}
        //   />
        //   <Igual />
        //   <Resultado
        //     index={0}
        //     handleInputChange={handleInputChange}
        //     answered={answered}
        //     showCorrection
        //     correctValues={[correctAnswer[0]]}
        //   />
        //   <Fraccion2y1SinConmutativaArriba
        //     index={1}
        //     answered={answered}
        //     handleInputChange={handleInputChange}
        //     showCorrection
        //     correctValues={[
        //       correctAnswer[1],
        //       correctAnswer[2],
        //       correctAnswer[3],
        //     ]}
        //   />
        //   <Igual />
        //   <Resultado
        //     index={2}
        //     handleInputChange={handleInputChange}
        //     answered={answered}
        //     showCorrection
        //     correctValues={[correctAnswer[4]]}
        //   />
        //   <Fraccion1y1
        //     index={3}
        //     handleInputChange={handleInputChange}
        //     answered={answered}
        //     showCorrection
        //     correctValues={[correctAnswer[5], correctAnswer[6]]}
        //   />
        //   <Igual />
        //   <Resultado
        //     index={4}
        //     handleInputChange={handleInputChange}
        //     answered={answered}
        //     showCorrection
        //     correctValues={[correctAnswer[7]]}
        //   />
        //   <Resultado
        //     index={5}
        //     handleInputChange={handleInputChange}
        //     answered={answered}
        //     showCorrection
        //     correctValues={[correctAnswer[8]]}
        //   />
        //   <Igual />
        //   <Resultado
        //     index={6}
        //     handleInputChange={handleInputChange}
        //     answered={answered}
        //     showCorrection
        //     correctValues={[correctAnswer[9]]}
        //   />
        // </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "pink",
          }}
        >
          <PorcentajeX valorX={type} />
          <Igual />
          <Fraccion2y1ValoresFijos
            numerador1={planteamiento[1]}
            numerador2={planteamiento[2]}
            denominador={planteamiento[3]}
            index={0}
          />
          <Igual />
          <Fraccion2y1ValoresFijos
            numerador1={correctAnswer[0]}
            numerador2={correctAnswer[1]}
            denominador={correctAnswer[2]}
            index={0}
          />
          <Igual />
          <Fraccion1y1ValoresFijos
            numerador1={correctAnswer[3]}
            numerador2={correctAnswer[4]}
          />
          <Igual />
          <Resultado
            index={3}
            handleInputChange={handleInputChange}
            answered={answered}
            correctIndex={5}
            correctValues={[correctAnswer[5]]}
            showCorrection
          />
        </div>
      )}
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  margin: "10px",
  border: "2px solid #007BFF", // Cambia el color y el grosor según tus preferencias
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  backgroundColor: "#ffffff", // Puedes agregar un color de fondo si lo deseas
  color: "#007BFF", // Color del texto
  transition: "background-color 0.3s, color 0.3s", // Efecto de transición
};

export default PorcentajeFormula;
