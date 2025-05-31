import React, { useState } from "react";

interface FractionInputProps {
  index: number;
  handleInputChange: (index: number, value: string) => void;
  answered: boolean;
  correctValues?: string[]; // Propiedad opcional
  showCorrection?: boolean; // Propiedad opcional
  correctIndex?: number[];
}

export const Fraccion1y1: React.FC<FractionInputProps> = ({
  index,
  handleInputChange,
  answered,
  correctValues = [],
  showCorrection = false,
  correctIndex,
}) => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");

  const handleValue1Change = (value: string) => {
    setValue1(value);
    handleInputChange(correctIndex ? correctIndex[0] : index * 2, value); // Enviar el valor al padre
  };

  const handleValue2Change = (value: string) => {
    setValue2(value);
    handleInputChange(correctIndex ? correctIndex[1] : index * 2 + 1, value); // Enviar el valor al padre
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="?"
          onChange={(e) => handleValue1Change(e.target.value)}
          disabled={answered}
          style={{
            width: "50px",
            textAlign: "center",
            background: "transparent",
          }}
          value={showCorrection && answered ? correctValues[0] : value1} // Mostrar respuesta correcta si ya se respondió
        />
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          width: "50px",
          margin: "0 auto",
        }}
      />
      <div>
        <input
          type="text"
          placeholder="?"
          onChange={(e) => handleValue2Change(e.target.value)}
          disabled={answered}
          style={{
            width: "50px",
            textAlign: "center",
            background: "transparent",
          }}
          value={showCorrection && answered ? correctValues[1] : value2} // Mostrar respuesta correcta si ya se respondió
        />
      </div>
    </div>
  );
};

export const Fraccion2y1: React.FC<FractionInputProps> = ({
  index,
  handleInputChange,
  answered,
  correctValues = [],
  showCorrection = false,
}) => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");

  const handleValue1Change = (value: string) => {
    setValue1(value);
    updateResult(value, value2); // Pasar el nuevo valor y el valor actual de value2
  };

  const handleValue2Change = (value: string) => {
    setValue2(value);
    updateResult(value1, value); // Pasar el valor actual de value1 y el nuevo valor
  };

  const updateResult = (val1: string, val2: string) => {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    if (!isNaN(num1) && !isNaN(num2)) {
      const result = num1 * num2;
      handleInputChange(index * 2, result.toString()); // Enviar el resultado de la multiplicación
    }
  };

  const handleValue3Change = (value: string) => {
    setValue3(value);
    handleInputChange(index * 2 + 1, value); // Enviar el valor del denominador
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="?"
          onChange={(e) => handleValue1Change(e.target.value)}
          disabled={answered}
          style={{
            width: "40px",
            textAlign: "center",
            marginRight: "0px",
            background: "transparent",
          }}
          value={showCorrection && answered ? correctValues[0] : value1} // Mostrar respuesta correcta si ya se respondió
        />
        <span style={{ fontSize: "24px", margin: "0 0px" }}>·</span>
        <input
          type="text"
          placeholder="?"
          onChange={(e) => handleValue2Change(e.target.value)}
          disabled={answered}
          style={{
            width: "40px",
            textAlign: "center",
            marginLeft: "0px",
            background: "transparent",
          }}
          value={showCorrection && answered ? correctValues[1] : value2} // Mostrar respuesta correcta si ya se respondió
        />
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          width: "80px",
          margin: "0 auto",
        }}
      />
      <div>
        {/* Campo del denominador */}
        <input
          type="text"
          placeholder="?"
          onChange={(e) => handleValue3Change(e.target.value)} // Enviar el valor del denominador
          disabled={answered}
          style={{
            width: "40px",
            textAlign: "center",
            background: "transparent",
          }}
          value={showCorrection && answered ? correctValues[2] : value3} // Mostrar respuesta correcta si ya se respondió
        />
      </div>
    </div>
  );
};

export const Fraccion2y1SinConmutativaArriba: React.FC<FractionInputProps> = ({
  index,
  handleInputChange,
  answered,
  correctValues = [],
  showCorrection = false,
  correctIndex,
}) => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");

  const handleValue1Change = (value: string) => {
    setValue1(value);
    handleInputChange(correctIndex ? correctIndex[0] : index * 2, value); // Enviar el valor del primer numerador
  };

  const handleValue2Change = (value: string) => {
    setValue2(value);
    handleInputChange(correctIndex ? correctIndex[1] : index * 2 + 1, value); // Enviar el valor del segundo numerador
  };

  const handleValue3Change = (value: string) => {
    setValue3(value);
    handleInputChange(correctIndex ? correctIndex[2] : index * 2 + 2, value); // Enviar el valor del denominador
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="?"
          onChange={(e) => handleValue1Change(e.target.value)}
          disabled={answered}
          style={{
            width: "40px",
            textAlign: "center",
            marginRight: "0px",
            background: "transparent",
          }}
          value={showCorrection && answered ? correctValues[0] : value1} // Mostrar respuesta correcta si ya se respondió
        />
        <span style={{ fontSize: "24px", margin: "0 0px" }}>·</span>
        <input
          type="text"
          placeholder="?"
          onChange={(e) => handleValue2Change(e.target.value)}
          disabled={answered}
          style={{
            width: "40px",
            textAlign: "center",
            marginLeft: "0px",
            background: "transparent",
          }}
          value={showCorrection && answered ? correctValues[1] : value2} // Mostrar respuesta correcta si ya se respondió
        />
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          width: "80px",
          margin: "0 auto",
        }}
      />
      <div>
        {/* Campo del denominador */}
        <input
          type="text"
          placeholder="?"
          onChange={(e) => handleValue3Change(e.target.value)} // Enviar el valor del denominador
          disabled={answered}
          style={{
            width: "40px",
            textAlign: "center",
            background: "transparent",
          }}
          value={showCorrection && answered ? correctValues[2] : value3} // Mostrar respuesta correcta si ya se respondió
        />
      </div>
    </div>
  );
};

export const Fraccion2y1ConDesplegables: React.FC<FractionInputProps> = ({
  index,
  handleInputChange,
  answered,
  correctValues = [],
  showCorrection = false,
  correctIndex,
}) => {
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [value3, setValue3] = useState<string>("");

  const options = ["%", "Part", "Total", "100"];

  const handleValue1Change = (value: string) => {
    setValue1(value);
    handleInputChange(correctIndex ? correctIndex[0] : index * 2, value); // Enviar el valor del primer numerador
  };

  const handleValue2Change = (value: string) => {
    setValue2(value);
    handleInputChange(correctIndex ? correctIndex[1] : index * 2 + 1, value); // Enviar el valor del segundo numerador
  };

  const handleValue3Change = (value: string) => {
    setValue3(value);
    handleInputChange(correctIndex ? correctIndex[2] : index * 2 + 2, value); // Enviar el valor del denominador
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <select
          onChange={(e) => handleValue1Change(e.target.value)}
          disabled={answered}
          value={showCorrection && answered ? correctValues[0] : value1} // Mostrar respuesta correcta si ya se respondió
          style={{
            width: "60px",
            textAlign: "center",
            marginRight: "0px",
            background: "transparent",
            color: "black",
          }}
        >
          <option value="" disabled>
            ...
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span style={{ fontSize: "24px", margin: "0 0px" }}>·</span>
        <select
          onChange={(e) => handleValue2Change(e.target.value)}
          disabled={answered}
          value={showCorrection && answered ? correctValues[1] : value2} // Mostrar respuesta correcta si ya se respondió
          style={{
            width: "60px",
            textAlign: "center",
            marginLeft: "0px",
            background: "transparent",
            color: "black",
          }}
        >
          <option value="" disabled>
            ...
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          width: "80px",
          margin: "0 auto",
        }}
      />
      <div>
        <select
          onChange={(e) => handleValue3Change(e.target.value)} // Enviar el valor del denominador
          disabled={answered}
          value={showCorrection && answered ? correctValues[2] : value3} // Mostrar respuesta correcta si ya se respondió
          style={{
            width: "60px",
            textAlign: "center",
            background: "transparent",
            color: "black",
          }}
        >
          <option value="" disabled>
            ...
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
interface Fraction2y1ValoresFijosProps {
  index: number;
  numerador1: string;
  numerador2: string;
  denominador: string;
}

export const Fraccion2y1ValoresFijos: React.FC<
  Fraction2y1ValoresFijosProps
> = ({ numerador1, numerador2, denominador }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "24px", margin: "0 5px" }}>{numerador1}</span>
        <span style={{ fontSize: "24px", margin: "0 5px" }}>·</span>
        <span style={{ fontSize: "24px", margin: "0 5px" }}>{numerador2}</span>
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          width: "80px",
          margin: "0 auto",
        }}
      />
      <div>
        <span style={{ fontSize: "24px", margin: "0 5px" }}>{denominador}</span>
      </div>
    </div>
  );
};

interface Fraccion1y1ValoresFijosProps {
  numerador1: string;
  numerador2: string;
}

export const Fraccion1y1ValoresFijos: React.FC<
  Fraccion1y1ValoresFijosProps
> = ({ numerador1, numerador2 }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "24px", margin: "0 5px" }}>{numerador1}</span>
      </div>
      <div
        style={{
          borderBottom: "1px solid black",
          width: "50px",
          margin: "0 auto",
        }}
      />
      <div>
        <span style={{ fontSize: "24px", margin: "0 5px" }}>{numerador2}</span>
      </div>
    </div>
  );
};
