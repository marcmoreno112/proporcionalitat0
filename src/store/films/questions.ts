import { Question } from "../../types";

const questions: Question[] = [
  {
    id: 1,
    enunciado:
      "Un estudiante ha sacado 85 puntos sobre un total de 90 en un examen. ¿Cuánto sería su calificación si el examen se hubiera realizado sobre 10 puntos?",
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "Entonces, vamos a hacer la regla de 3",
      feedbackIncorrecto: "No hay ningún %. Vamos a hacer una regla de 3",
    },
    p2: {
      enunciado: "¿Es proporcionalidad directa?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "Correcto",
      feedbackIncorrecto:
        "Incorrecto. Cuanto más subimos la nota máxima, más sube la nota sacada",
    },
    fórmula: {
      formulaType: "regla3",
      respuestaCorrecta: [
        "85",
        "90",
        "x",
        "10",
        "850",
        "90",
        "850",
        "90",
        "9.44",
      ],
    },
  },
];

export default questions;
