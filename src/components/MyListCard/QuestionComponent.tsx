import React, { useState, useEffect } from "react";

interface QuestionComponentProps {
  question: string;
  correctAnswer: string;
  incorrectAnswer: string;
  correctFeedback: string;
  incorrectFeedback: string;
  onToggle: (isQuestionOk: boolean) => void; // Función para hacer toggle
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  correctAnswer,
  incorrectAnswer,
  correctFeedback,
  incorrectFeedback,
  onToggle,
}) => {
  const [result, setResult] = useState<string>("");
  const [isResultOk, setIsResultOk] = useState<boolean>(false);
  const [answered, setAnswered] = useState<boolean>(false); // Estado para saber si la pregunta ha sido respondida
  const [answers, setAnswers] = useState<string[]>([]); // Estado para las respuestas

  useEffect(() => {
    // Aleatorizar las respuestas al montar el componente
    const randomizedAnswers =
      Math.random() < 0.5
        ? [correctAnswer, incorrectAnswer]
        : [incorrectAnswer, correctAnswer];
    setAnswers(randomizedAnswers);
  }, [correctAnswer, incorrectAnswer]);

  const checkAnswer = (answer: string) => {
    if (answered) return; // No permitir responder si ya se ha respondido

    setAnswered(true); // Marcar como respondida
    if (answer === correctAnswer) {
      setResult(correctFeedback);
      setIsResultOk(true);
      onToggle(true);
    } else {
      setResult(incorrectFeedback);
      setIsResultOk(false);
      onToggle(false);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ fontWeight: "normal" }}>{question}</h3>
      {answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => checkAnswer(answer)}
          style={buttonStyle}
          disabled={answered}
        >
          {answer}
        </button>
      ))}
      {isResultOk && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
          {result}
        </p>
      )}
      {!isResultOk && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "red" }}>
          {result}
        </p>
      )}
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: "5px 10px",
  margin: "10px",
  border: "2px solid #007BFF", // Cambia el color y el grosor según tus preferencias
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  backgroundColor: "#ffffff", // Puedes agregar un color de fondo si lo deseas
  color: "#007BFF", // Color del texto
  transition: "background-color 0.3s, color 0.3s", // Efecto de transición
};

export default QuestionComponent;
