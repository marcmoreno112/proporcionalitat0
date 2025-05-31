import { Question } from "../../types";

const questions: Question[] = [
  {
    id: 57,
    enunciado:
      "Tu Brawler ha perdido 10 puntos de vida en una batalla. Si tenías 80 puntos de vida al inicio, ¿qué porcentaje has perdido?",
    enunciadoFeedback: `Tu Brawler ha perdido 10 puntos de vida en una batalla. Si tenías 80 puntos de vida al inicio, ¿qué <span style="color: red;">porcentaje</span> has perdido?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Nos piden un %, no un antes y después.",
    },
    fórmula: {
      formulaType: "%%",
      planteamientoPreFormula: ["%", "Part", "100", "Total"],
      respuestaCorrecta: ["10", "100", "80", "1000", "80", "12.5"],
    },
  },
  {
    id: 56,
    enunciado:
      "Has ganado 50 puntos de experiencia en una partida. Si comenzaste con 200 puntos de experiencia, ¿qué porcentaje representa sobre el total?",
    enunciadoFeedback: `Has ganado 50 puntos de experiencia en una partida. Si comenzaste con 200 puntos de experiencia, ¿qué <span style="color: red;">porcentaje</span> representa sobre el total?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Nos piden un %, y hay un aumento.",
    },
    fórmula: {
      formulaType: "%%",
      planteamientoPreFormula: ["%", "Part", "100", "Total"],
      respuestaCorrecta: ["50", "100", "200", "5000", "200", "25"],
    },
  },
  {
    id: 55,
    enunciado:
      "Tu Brawler ha perdido 15 puntos de superataque. Si tenías 75 puntos de superataque al inicio, ¿qué porcentaje has perdido?",
    enunciadoFeedback: `Tu Brawler ha perdido 15 puntos de superataque. Si tenías 75 puntos de superataque al inicio, ¿qué <span style="color: red;">porcentaje has perdido</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Nos piden un %, no un antes y después.",
    },
    fórmula: {
      formulaType: "%%",
      planteamientoPreFormula: ["%", "Part", "100", "Total"],
      respuestaCorrecta: ["15", "100", "75", "1500", "75", "20"],
    },
  },
  {
    id: 54,
    enunciado:
      "Tu Brawler ha recogido 40 gemas en una partida. El máximo que podría haber recogido son 200 gemas, ¿qué porcentaje ha recogido sobre el total?",
    enunciadoFeedback: `Tu Brawler ha recogido 25 gemas en una partida. El máximo que podría haber recogido son 100 gemas, ¿qué <span style="color: red;">porcentaje</span> ha recogido sobre el total?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Nos piden un %, y hay un aumento.",
    },
    fórmula: {
      formulaType: "%%",
      planteamientoPreFormula: ["%", "Part", "100", "Total"],
      respuestaCorrecta: ["40", "100", "200", "4000", "200", "20"],
    },
  },
  {
    id: 53,
    enunciado:
      "Has perdido 40 puntos de vida en una batalla con tu Brawler. Si comenzaste con 200 puntos de vida, ¿qué porcentaje has perdido?",
    enunciadoFeedback: `Has perdido 40 puntos de vida en una batalla con tu Brawler. Si comenzaste con 200 puntos de vida, ¿qué <span style="color: red;">porcentaje</span> has perdido?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Nos piden un %, no un antes y después.",
    },
    fórmula: {
      formulaType: "%%",
      planteamientoPreFormula: ["%", "Part", "100", "Total"],
      respuestaCorrecta: ["40", "100", "200", "4000", "200", "20"],
    },
  },
  {
    id: 52,
    enunciado:
      "Has perdido 30 puntos de vida. Si sabemos que tenías 150 al empezar la batalla, ¿qué porcentaje has perdido?",
    enunciadoFeedback: `Has perdido 30 puntos de vida. Si sabemos que tenías 150 al empezar la batalla, ¿qué <span style="color: red;">porcentaje</span> has perdido?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Nos piden un %, no un antes y después.",
    },
    fórmula: {
      formulaType: "%%",
      planteamientoPreFormula: ["%", "Part", "100", "Total"],
      respuestaCorrecta: ["30", "100", "150", "3000", "150", "20"],
    },
  },
  {
    id: 525,
    enunciado:
      "Tu Brawler ha perdido 25 puntos de vida. Si sabemos que esto representa el 5% de la vida que tenía antes de la batalla, ¿cuánta vida tenía al empezar?",
    enunciadoFeedback: `Tu Brawler ha perdido 25 puntos de vida. Si sabemos que esto representa el <span style="color: red;">5%</span> de la vida que tenía <span style="color: red;">antes</span> de la batalla, ¿cuánta vida tenía al empezar?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. Estás hablando de una disminución de vida.",
    },
    fórmula: {
      formulaType: "%total",
      planteamientoPreFormula: ["Total", "Part", "100", "%"],
      respuestaCorrecta: ["25", "100", "5", "2500", "5", "500"],
    },
  },
  {
    id: 524,
    enunciado:
      "Tu Brawler ha ganado 80 puntos de energía. Si sabemos que esto representa el 20% de la energía que tenía antes de la pelea, ¿cuánta energía tenía al empezar?",
    enunciadoFeedback: `Tu Brawler ha ganado 80 puntos de energía. Si sabemos que esto representa el <span style="color: red;">20%</span> de la energía que tenía <span style="color: red;">antes</span> de la pelea, ¿cuánta energía tenía al empezar?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. Estás hablando de un aumento de energía.",
    },
    fórmula: {
      formulaType: "%total",
      planteamientoPreFormula: ["Total", "Part", "100", "%"],
      respuestaCorrecta: ["80", "100", "20", "8000", "20", "400"],
    },
  },

  {
    id: 523,
    enunciado:
      "Tu Brawler ha perdido 60 puntos de vida. Si sabemos que esto representa el 15% de la vida que tenía antes de la batalla, ¿cuánta vida tenía al empezar?",
    enunciadoFeedback: `Tu Brawler ha perdido 60 puntos de vida. Si sabemos que esto representa el <span style="color: red;">15%</span> de la vida que tenía <span style="color: red;">antes</span> de la batalla, ¿cuánta vida tenía al empezar?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. Estás hablando de una disminución de vida.",
    },
    fórmula: {
      formulaType: "%total",
      planteamientoPreFormula: ["Total", "Part", "100", "%"],
      respuestaCorrecta: ["60", "100", "15", "6000", "15", "400"],
    },
  },
  {
    id: 522,
    enunciado:
      "Tu Brawler ha ganado 50 puntos de energía. Si sabemos que esto representa el 10% de la energía que tenía antes de la pelea, ¿cuánta energía tenía al empezar?",
    enunciadoFeedback: `Tu Brawler ha ganado 50 puntos de energía. Si sabemos que esto representa el <span style="color: red;">10%</span> de la energía que tenía <span style="color: red;">antes</span> de la pelea, ¿cuánta energía tenía al empezar?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. Estás hablando de un aumento de energía.",
    },
    fórmula: {
      formulaType: "%total",
      planteamientoPreFormula: ["Total", "Part", "100", "%"],
      respuestaCorrecta: ["50", "100", "10", "5000", "10", "500"],
    },
  },
  {
    id: 521,
    enunciado:
      "Tu Brawler ha perdido 40 puntos de energía. Si sabemos que ha perdido el 25% de la energía que tenía antes de la pelea, ¿cuánta energía tenía al empezar?",
    enunciadoFeedback: `Tu Brawler ha perdido 40 puntos de energía. Si sabemos que ha perdido el <span style="color: red;">25%</span> de la energía que tenía <span style="color: red;">antes</span> de la pelea, ¿cuánta energía tenía al empezar?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. NO te están preguntando cuánta energía queda DESPUÉS. Preguntan cuánta había ANTES y te dan los puntos que pierdes.",
    },
    fórmula: {
      formulaType: "%total",
      planteamientoPreFormula: ["Total", "Part", "100", "%"],
      respuestaCorrecta: ["40", "100", "25", "4000", "25", "160"],
    },
  },
  {
    id: 520,
    enunciado:
      "Has perdido 30 puntos de vida. Si sabemos que has perdido el 20% de los que tenías antes de la batalla, ¿cuántos puntos tenías al empezar?",
    enunciadoFeedback: `Has perdido 30 puntos de vida. Si sabemos que has perdido el <span style="color: red;">20%</span> de los que tenías <span style="color: red;">antes</span> de la batalla, ¿cuántos puntos tenías al empezar?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. NO te están preguntando cuántos puntos de vida quedan DESPUÉS. Preguntan los que había ANTES y te dan los que pierdes.",
    },
    fórmula: {
      formulaType: "%total",
      planteamientoPreFormula: ["Total", "Part", "100", "%"],
      respuestaCorrecta: ["30", "100", "20", "3000", "20", "150"],
    },
  },
  {
    id: 514,
    enunciado:
      "Eres un Brawler con 2500 puntos de vida. Si un ataque enemigo te hace perder un 20% de tu vida, ¿cuánto perderías?",
    enunciadoFeedback: `Eres un Brawler con 2500 puntos de vida. Si un ataque enemigo te hace perder un <span style="color: red;">20%</span> de tu vida, ¿cuánto perderías?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. No te están preguntando cuántos puntos de vida quedan DESPUÉS. Preguntan los que pierdes.",
    },
    fórmula: {
      formulaType: "%parcial",
      planteamientoPreFormula: ["Part", "%", "Total", "100"],
      respuestaCorrecta: ["20", "2500", "100", "50000", "100", "500"],
    },
  },
  {
    id: 515,
    enunciado:
      "Eres un Brawler con 3000 puntos de vida. Si un ataque especial te hace perder un 35% de tu vida, ¿cuánto perderías?",
    enunciadoFeedback: `Eres un Brawler con 3000 puntos de vida. Si un ataque especial te hace perder un <span style="color: red;">35%</span> de tu vida, ¿cuánto perderías?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. No te están preguntando cuántos puntos de vida quedan DESPUÉS. Preguntan los que pierdes.",
    },
    fórmula: {
      formulaType: "%parcial",
      planteamientoPreFormula: ["Part", "%", "Total", "100"],
      respuestaCorrecta: ["35", "3000", "100", "105000", "100", "1050"],
    },
  },
  {
    id: 513,
    enunciado:
      "Eres un Brawler con 1800 puntos de vida. Si un enemigo te lanza un ataque que te hace perder un 15% de tu vida, ¿cuánto perderías?",
    enunciadoFeedback: `Eres un Brawler con 1800 puntos de vida. Si un enemigo te lanza un ataque que te hace perder un <span style="color: red;">15%</span> de tu vida, ¿cuánto perderías?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. No te están preguntando cuántos puntos de vida quedan DESPUÉS. Preguntan los que pierdes.",
    },
    fórmula: {
      formulaType: "%parcial",
      planteamientoPreFormula: ["Part", "%", "Total", "100"],
      respuestaCorrecta: ["15", "1800", "100", "27000", "100", "270"],
    },
  },
  {
    id: 512,
    enunciado:
      "Eres un Brawler con 2000 puntos de vida. Si un ataque especial te hace perder un 40% de tu vida, ¿cuánto perderías?",
    enunciadoFeedback: `Eres un Brawler con 2000 puntos de vida. Si un ataque especial te hace perder un <span style="color: red;">40%</span> de tu vida, ¿cuánto perderías?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. No te están preguntando cuántos puntos de vida quedan DESPUÉS. Preguntan los que pierdes.",
    },
    fórmula: {
      formulaType: "%parcial",
      planteamientoPreFormula: ["Part", "%", "Total", "100"],
      respuestaCorrecta: ["40", "2000", "100", "80000", "100", "800"],
    },
  },
  {
    id: 510,
    enunciado:
      "Eres un Brawler con 1500 puntos de vida. Si un enemigo te ataca y te hace perder un 25% de tu vida, ¿cuánto perderías?",
    enunciadoFeedback: `Eres un Brawler con 1500 puntos de vida. Si un enemigo te ataca y te hace perder un <span style="color: red;">25%</span> de tu vida, ¿cuánto perderías?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. No te están preguntando cuántos puntos de vida quedan DESPUÉS. Preguntan los que pierdes.",
    },
    fórmula: {
      formulaType: "%parcial",
      planteamientoPreFormula: ["Part", "%", "Total", "100"],
      respuestaCorrecta: ["25", "1500", "100", "37500", "100", "375"],
    },
  },
  {
    id: 50,
    enunciado:
      "Tienes 120 puntos de vida. Si te golpean en el siguiente ataque perderás un 30%. ¿Cuánto perderías?",
    enunciadoFeedback: `Tienes 120 puntos de vida. Si te golpean en el siguiente ataque perderás un <span style="color: red;">30%</span>. ¿Cuánto perderías?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto: "Incorrecto. Hay un porcentaje.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "No",
      respuestaIncorrecta: "Sí",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. No te están preguntando cuántos puntos de vida quedan DESPUÉS. Preguntan los que pierdes",
    },
    fórmula: {
      formulaType: "%parcial",
      planteamientoPreFormula: ["Part", "%", "Total", "100"],
      respuestaCorrecta: ["30", "120", "100", "3600", "100", "36"],
    },
  },
  {
    id: 5,
    enunciado:
      "Durante una partida de Brawl Stars, mi Brawler ha perdido un 20% de su salud tras un ataque enemigo. Si tenía 400 de salud, ¿cuánta salud le queda ahora?",
    enunciadoFeedback: `Durante una partida de Brawl Stars, mi Brawler ha <span style="color: red;">PERDIDO</span> un <span style="color: red;">20%</span> de su salud tras un ataque enemigo. Si tenía <span style="color: red;">400</span> de salud, ¿cuánta salud le queda <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay una disminución de salud.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Disminución",
      respuestaIncorrecta: "Aumento",
      feedbackCorrecto: "¡Correcto! La salud ha disminuido.",
      feedbackIncorrecto: "Incorrecto. No estamos aumentando la salud.",
    },
    fórmula: {
      formulaType: "disminución",
      respuestaCorrecta: [
        "400",
        "20",
        "400",
        "100",
        "400",
        "8000",
        "100",
        "400",
        "80",
        "320",
      ],
    },
  },
  {
    id: 6,
    enunciado:
      "En una partida de Brawl Stars, mi Brawler ha perdido un 25% de su munición después de un intenso combate. Si tenía 120 balas, ¿cuántas balas le quedan ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars, mi Brawler ha <span style="color: red;">PERDIDO</span> un <span style="color: red;">25%</span> de su munición después de un intenso combate. Si tenía <span style="color: red;">120</span> balas, ¿cuántas balas le quedan <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay una disminución de munición.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Disminución",
      respuestaIncorrecta: "Aumento",
      feedbackCorrecto: "¡Correcto! La munición ha disminuido.",
      feedbackIncorrecto: "Incorrecto. No estamos aumentando la munición.",
    },
    fórmula: {
      formulaType: "disminución",
      respuestaCorrecta: [
        "120",
        "25",
        "120",
        "100",
        "120",
        "3000",
        "100",
        "120",
        "30",
        "90",
      ],
    },
  },
  {
    id: 7,
    enunciado:
      "En una partida de Brawl Stars, mi Brawler ha perdido un 30% de su velocidad tras recibir un golpe. Si tenía 200 de velocidad, ¿cuánta velocidad le queda ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars, mi Brawler ha <span style="color: red;">PERDIDO</span> un <span style="color: red;">30%</span> de su velocidad tras recibir un golpe. Si tenía <span style="color: red;">200</span> de velocidad, ¿cuánta velocidad le queda <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay una disminución de velocidad.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Disminución",
      respuestaIncorrecta: "Aumento",
      feedbackCorrecto: "¡Correcto! La velocidad ha disminuido.",
      feedbackIncorrecto: "Incorrecto. No estamos aumentando la velocidad.",
    },
    fórmula: {
      formulaType: "disminución",
      respuestaCorrecta: [
        "200",
        "30",
        "200",
        "100",
        "200",
        "6000",
        "100",
        "200",
        "60",
        "140",
      ],
    },
  },
  {
    id: 8,
    enunciado:
      "En una partida de Brawl Stars, mi Brawler ha perdido un 5% de su daño por segundo tras un ataque especial. Si hacía 150 de daño por segundo, ¿cuánto daño hace ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars, mi Brawler ha <span style="color: red;">PERDIDO</span> un <span style="color: red;">5%</span> de su daño por segundo tras un ataque especial. Si hacía <span style="color: red;">150</span> de daño por segundo, ¿cuánto daño hace <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay una disminución de daño.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Disminución",
      respuestaIncorrecta: "Aumento",
      feedbackCorrecto: "¡Correcto! El daño ha disminuido.",
      feedbackIncorrecto: "Incorrecto. No estamos aumentando el daño.",
    },
    fórmula: {
      formulaType: "disminución",
      respuestaCorrecta: [
        "150",
        "5",
        "150",
        "100",
        "150",
        "750",
        "100",
        "150",
        "7.5",
        "142.5",
      ],
    },
  },
  {
    id: 9,
    enunciado:
      "En una partida de Brawl Stars, mi Brawler ha perdido un 40% de su escudo tras un ataque. Si tenía 500 de escudo, ¿cuánto escudo le queda ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars, mi Brawler ha <span style="color: red;">PERDIDO</span> un <span style="color: red;">40%</span> de su escudo tras un ataque. Si tenía <span style="color: red;">500</span> de escudo, ¿cuánto escudo le queda <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! ",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay una disminución de escudo.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Disminución",
      respuestaIncorrecta: "Aumento",
      feedbackCorrecto: "¡Correcto! El escudo ha disminuido.",
      feedbackIncorrecto: "Incorrecto. No estamos aumentando el escudo.",
    },
    fórmula: {
      formulaType: "disminución",
      respuestaCorrecta: [
        "500",
        "40",
        "500",
        "100",
        "500",
        "20000",
        "100",
        "500",
        "200",
        "300",
      ],
    },
  },
  {
    id: 4,
    enunciado:
      "En una partida de Brawl Stars, mi Brawler ha perdido un 15% de su energía después de recibir daño. Si tenía 300 de energía, ¿cuánta energía le queda ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars, mi Brawler ha <span style="color: red;">PERDIDO</span> un <span style="color: red;">15%</span> de su energía después de recibir daño. Si tenía <span style="color: red;">300</span> de energía, ¿cuánta energía le queda <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay una disminución de energía.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Disminución",
      respuestaIncorrecta: "Aumento",
      feedbackCorrecto: "¡Correcto! La energía ha disminuido.",
      feedbackIncorrecto: "Incorrecto. No estamos aumentando la energía.",
    },
    fórmula: {
      formulaType: "disminución",
      respuestaCorrecta: [
        "300",
        "15",
        "300",
        "100",
        "300",
        "4500",
        "100",
        "300",
        "45",
        "255",
      ],
    },
  },
  {
    id: 3,
    enunciado:
      "En una partida de Brawl Stars he perdido un 10% de los puntos de vida que tenía. Si tenía 250, ¿cuántos tengo ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars he <span style="color: red;">PERDIDO</span> un <span style="color: red;">10%</span> de los puntos de vida que <span style="color: red;">tenía</span>. Si tenía <span style="color: red;">250</span>, ¿cuántos tengo <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "Correcto! No podemos hacer sólo una regla de 3",
      feedbackIncorrecto: "Incorrecto! Hay porcentaje, hay fórmula de Fran",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "Correcto",
      feedbackIncorrecto: "Incorrecto",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Disminución",
      respuestaIncorrecta: "Aumento",
      feedbackCorrecto: "Correcto",
      feedbackIncorrecto: "Incorrecto. Vamos a aumentar lo que ya teníamos",
    },
    fórmula: {
      formulaType: "disminución",
      respuestaCorrecta: [
        "250",
        "10",
        "250",
        "100",
        "250",
        "2500",
        "100",
        "250",
        "25",
        "225",
      ],
    },
  },
  {
    id: 1,
    enunciado:
      "Una partida de Brawl me ha generado un 20% de gemas más de las que tenía. Si tenía 25 gemas, ¿cuántas tengo ahora?",
    enunciadoFeedback: `Una partida de Brawl me ha generado un <span style="color: red;">20%</span> de gemas <span style="color: red;">MÁS</span> de las que <span style="color: red;">tenía</span>. Si tenía 25 gemas, ¿cuántas tengo <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "Correcto! No podemos hacer sólo una regla de 3",
      feedbackIncorrecto: "Incorrecto! Hay porcentaje, hay fórmula de Fran",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "Correcto",
      feedbackIncorrecto: "Incorrecto",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Aumento",
      respuestaIncorrecta: "Disminución",
      feedbackCorrecto: "Correcto",
      feedbackIncorrecto: "Incorrecto. Vamos a aumentar lo que ya teníamos",
    },
    fórmula: {
      formulaType: "aumento",
      respuestaCorrecta: [
        "25",
        "20",
        "25",
        "100",
        "25",
        "500",
        "100",
        "25",
        "5",
        "30",
      ],
    },
  },
  {
    id: 10,
    enunciado:
      "En una partida de Brawl Stars, he conseguido un 15% más de monedas de las que tenía. Si tenía 80 monedas, ¿cuántas tengo ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars, he conseguido un <span style="color: red;">15%</span> más de monedas de las que <span style="color: red;">tenía</span>. Si tenía <span style="color: red;">80</span> monedas, ¿cuántas tengo <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! Necesitamos calcular el aumento.",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay un aumento de monedas.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Aumento",
      respuestaIncorrecta: "Disminución",
      feedbackCorrecto: "¡Correcto! Vamos a aumentar lo que ya teníamos.",
      feedbackIncorrecto: "Incorrecto. No estamos disminuyendo.",
    },
    fórmula: {
      formulaType: "aumento",
      respuestaCorrecta: [
        "80",
        "15",
        "80",
        "100",
        "80",
        "1200",
        "100",
        "80",
        "12",
        "92",
      ],
    },
  },
  {
    id: 11,
    enunciado:
      "En una partida de Brawl Stars, he ganado un 25% más de puntos de experiencia. Si tenía 200 puntos de experiencia, ¿cuántos tengo ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars, he ganado un <span style="color: red;">25%</span> más de puntos de experiencia de los que <span style="color: red;">tenía</span>. Si tenía <span style="color: red;">200</span> puntos de experiencia, ¿cuántos tengo <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! Necesitamos calcular el aumento.",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay un aumento de experiencia.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Aumento",
      respuestaIncorrecta: "Disminución",
      feedbackCorrecto: "¡Correcto! Vamos a aumentar lo que ya teníamos.",
      feedbackIncorrecto: "Incorrecto. No estamos disminuyendo.",
    },
    fórmula: {
      formulaType: "aumento",
      respuestaCorrecta: [
        "200",
        "25",
        "200",
        "100",
        "200",
        "5000",
        "100",
        "200",
        "50",
        "250",
      ],
    },
  },
  {
    id: 12,
    enunciado:
      "En una partida de Brawl Stars, he obtenido un 10% más de salud. Si tenía 1500 de salud, ¿cuánta salud tengo ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars, he obtenido un <span style="color: red;">10%</span> más de salud de la que <span style="color: red;">tenía</span>. Si tenía <span style="color: red;">1500</span> de salud, ¿cuánta salud tengo <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! Necesitamos calcular el aumento.",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay un aumento de salud.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Aumento",
      respuestaIncorrecta: "Disminución",
      feedbackCorrecto: "¡Correcto! Vamos a aumentar lo que ya teníamos.",
      feedbackIncorrecto: "Incorrecto. No estamos disminuyendo.",
    },
    fórmula: {
      formulaType: "aumento",
      respuestaCorrecta: [
        "1500",
        "10",
        "1500",
        "100",
        "1500",
        "15000",
        "100",
        "1500",
        "150",
        "1650",
      ],
    },
  },
  {
    id: 13,
    enunciado:
      "En una partida de Brawl Stars, he conseguido un 30% más de poder de ataque. Si tenía 400 de poder de ataque, ¿cuánto poder de ataque tengo ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars, he conseguido un <span style="color: red;">30%</span> más de poder de ataque de lo que <span style="color: red;">tenía</span>. Si tenía <span style="color: red;">400</span> de poder de ataque, ¿cuánto poder de ataque tengo <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! Necesitamos calcular el aumento.",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay un aumento de poder de ataque.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Aumento",
      respuestaIncorrecta: "Disminución",
      feedbackCorrecto: "¡Correcto! Vamos a aumentar lo que ya teníamos.",
      feedbackIncorrecto: "Incorrecto. No estamos disminuyendo.",
    },
    fórmula: {
      formulaType: "aumento",
      respuestaCorrecta: [
        "400",
        "30",
        "400",
        "100",
        "400",
        "12000",
        "100",
        "400",
        "120",
        "520",
      ],
    },
  },
  {
    id: 14,
    enunciado:
      "En una partida de Brawl Stars, he ganado un 50% más de tiempo de juego. Si tenía 60 minutos, ¿cuánto tiempo tengo ahora?",
    enunciadoFeedback: `En una partida de Brawl Stars, he ganado un <span style="color: red;">50%</span> más de tiempo de juego de lo que <span style="color: red;">tenía</span>. Si tenía <span style="color: red;">60</span> minutos, ¿cuánto tiempo tengo <span style="color: red;">ahora</span>?`,
    p1: {
      enunciado: "¿Es un problema de porcentajes?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto! Necesitamos calcular el aumento.",
      feedbackIncorrecto:
        "Incorrecto. Hay un porcentaje que debemos considerar.",
    },
    p2: {
      enunciado: "¿Hay algún aumento o disminución?",
      respuestaCorrecta: "Sí",
      respuestaIncorrecta: "No",
      feedbackCorrecto: "¡Correcto!",
      feedbackIncorrecto: "Incorrecto. Hay un aumento de tiempo de juego.",
    },
    p3: {
      enunciado: "¿Es un aumento o una disminución?",
      respuestaCorrecta: "Aumento",
      respuestaIncorrecta: "Disminución",
      feedbackCorrecto: "¡Correcto! Vamos a aumentar lo que ya teníamos.",
      feedbackIncorrecto: "Incorrecto. No estamos disminuyendo.",
    },
    fórmula: {
      formulaType: "aumento",
      respuestaCorrecta: [
        "60",
        "50",
        "60",
        "100",
        "60",
        "3000",
        "100",
        "60",
        "30",
        "90",
      ],
    },
  },
  {
    id: 2,
    enunciado:
      "Un estudiante ha sacado 85 puntos sobre un total de 90 en un examen. ¿Cuánto sería su calificación si el examen se hubiera realizado sobre 10 puntos?",
    enunciadoFeedback: `Un estudiante ha sacado 85 <span style="color: red;">puntos</span> sobre un <span style="color: red;">total</span> de 90 en un examen. ¿Cuánto sería su calificación si el examen se hubiera realizado sobre 10 <span style="color: red;">puntos</span>?`,
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
