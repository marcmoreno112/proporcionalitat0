import React, { useState } from "react";

export const Igual: React.FC = () => {
  return <span style={{ fontSize: "24px", margin: "5px 5px" }}>=</span>;
};

export const Equis: React.FC = () => {
  return <span style={{ fontSize: "22px", margin: "5px 5px" }}>x</span>;
};

interface FractionInputProps {
  index: number;
  handleInputChange: (index: number, value: string) => void;
  answered: boolean;
  showCorrection?: boolean;
  correctValues?: string[];
}

export const Resultado: React.FC<FractionInputProps> = ({
  index,
  handleInputChange,
  answered,
  showCorrection = false,
  correctValues = [],
}) => {
  const [value1, setValue1] = useState<string>("");

  const handleValue1Change = (value: string) => {
    setValue1(value);
    handleInputChange(index * 2, value); // Enviar el valor al padre
  };
  return (
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
  );
};

export const Flecha: React.FC = () => {
  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <span
          style={{
            margin: "5px 5px",
            fontSize: "24px",
          }}
        >
          &#8594; {/* Flecha hacia la derecha */}
        </span>
      </div>
    </div>
  );
};
