import React, { useState } from "react";
import {
  Flecha,
  Igual,
  Equis,
  Resultado,
  Magnitud,
  Giramos,
} from "./ElementosFórmulas";
import { Fraccion1y1, Fraccion2y1 } from "./Fracción";

interface FormulaComponentProps {
  onToggle: () => void; // Función para hacer toggle
  correctAnswer: string[]; // Respuesta correcta como array de strings
  magnitudes?: string[];
}

const FormulaRegal3Inversa: React.FC<FormulaComponentProps> = ({
  onToggle,
  correctAnswer,
  magnitudes,
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
    onToggle(); // Llamar a la función de toggle
  };

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value; // Almacenar el valor como string
    setUserAnswers(newAnswers);
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              border: "orange solid",
              justifyItems: "center",
            }}
          >
            {magnitudes && <Magnitud magnitud={magnitudes[0]} color="orange" />}
            <Fraccion1y1
              index={0}
              handleInputChange={handleInputChange}
              answered={answered}
              correctValues={[correctAnswer[0], correctAnswer[1]]}
            />
          </div>
          <Igual />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              border: "purple solid",
            }}
          >
            {magnitudes && <Magnitud magnitud={magnitudes[1]} color="purple" />}
            <Fraccion1y1
              index={1}
              handleInputChange={handleInputChange}
              answered={answered}
              correctValues={[correctAnswer[2], correctAnswer[3]]}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Giramos />
        </div>
        <Flecha />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              border: "purple solid",
            }}
          >
            {magnitudes && <Magnitud magnitud={magnitudes[1]} color="purple" />}
            <Fraccion1y1
              index={2}
              handleInputChange={handleInputChange}
              answered={answered}
              correctValues={[correctAnswer[4], correctAnswer[5]]}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              border: "orange solid",
              justifyItems: "center",
            }}
          >
            {magnitudes && <Magnitud magnitud={magnitudes[0]} color="orange" />}
            <Fraccion1y1
              index={3}
              handleInputChange={handleInputChange}
              answered={answered}
              correctValues={[correctAnswer[6], correctAnswer[7]]}
            />
          </div>
          <Igual />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              border: "purple solid",
            }}
          >
            {magnitudes && <Magnitud magnitud={magnitudes[1]} color="purple" />}
            <Fraccion1y1
              index={4}
              handleInputChange={handleInputChange}
              answered={answered}
              correctValues={[correctAnswer[8], correctAnswer[9]]}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flecha />
          <Equis />
          <Igual />
          <Fraccion2y1
            index={5}
            answered={answered}
            handleInputChange={handleInputChange}
            correctValues={[
              correctAnswer[10],
              correctAnswer[11],
              correctAnswer[12],
            ]}
          />
          <Igual />
          <Fraccion1y1
            index={6}
            handleInputChange={handleInputChange}
            answered={answered}
            correctValues={[correctAnswer[13], correctAnswer[14]]}
          />
          <Igual />
          <Resultado
            index={7}
            handleInputChange={handleInputChange}
            answered={answered}
            correctValues={[correctAnswer[15]]}
          />
        </div>
        <button onClick={checkAnswer} style={buttonStyle} disabled={answered}>
          Comprobar Respuesta
        </button>
      </div>
      {hasToShowCorrectAnswer ? (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "red" }}>
          {result}
        </p>
      ) : (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
          {result}
        </p>
      )}
      <div
        style={{
          textAlign: "center",
          marginTop: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {hasToShowCorrectAnswer && (
          <div
            style={{
              textAlign: "center",
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "orange solid",
                  justifyItems: "center",
                }}
              >
                {magnitudes && (
                  <Magnitud magnitud={magnitudes[0]} color="orange" />
                )}
                <Fraccion1y1
                  index={3}
                  handleInputChange={handleInputChange}
                  answered={answered}
                  correctValues={[correctAnswer[6], correctAnswer[7]]}
                  showCorrection
                />
              </div>
              <Igual />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  border: "purple solid",
                }}
              >
                {magnitudes && (
                  <Magnitud magnitud={magnitudes[1]} color="purple" />
                )}
                <Fraccion1y1
                  index={4}
                  handleInputChange={handleInputChange}
                  answered={answered}
                  correctValues={[correctAnswer[8], correctAnswer[9]]}
                  showCorrection
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Flecha />
              <Equis />
              <Igual />
              <Fraccion2y1
                index={5}
                answered={answered}
                handleInputChange={handleInputChange}
                correctValues={[correctAnswer[10], correctAnswer[11]]}
                showCorrection
              />
              <Igual />
              <Fraccion1y1
                index={6}
                handleInputChange={handleInputChange}
                answered={answered}
                correctValues={[correctAnswer[12], correctAnswer[13]]}
                showCorrection
              />
              <Igual />
              <Resultado
                index={7}
                handleInputChange={handleInputChange}
                answered={answered}
                correctValues={[correctAnswer[14]]}
                showCorrection
              />
            </div>
          </div>
        )}
      </div>
    </>
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

export default FormulaRegal3Inversa;
