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
  correctIndex?: number;
}

export const Resultado: React.FC<FractionInputProps> = ({
  index,
  handleInputChange,
  answered,
  showCorrection = false,
  correctValues = [],
  correctIndex,
}) => {
  const [value1, setValue1] = useState<string>("");

  const handleValue1Change = (value: string) => {
    setValue1(value);
    handleInputChange(correctIndex ? correctIndex : index * 2, value); // Enviar el valor al padre
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

export const DesplegablePorcentaje: React.FC<FractionInputProps> = ({
  index,
  handleInputChange,
  answered,
  showCorrection = false,
  correctValues = [],
  correctIndex,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    handleInputChange(correctIndex ? correctIndex : index * 2, value); // Enviar el valor al padre
  };

  return (
    <select
      onChange={handleValueChange}
      disabled={answered}
      value={showCorrection && answered ? correctValues[0] : selectedValue} // Mostrar respuesta correcta si ya se respondió
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
      <option value="%">%</option>
      <option value="Part">Part</option>
      <option value="Total">Total</option>
      <option value="100">100</option>
    </select>
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

export const FlechaInvertir: React.FC = () => {
  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <span
          style={{
            fontSize: "24px",
          }}
        >
          &#8597; {/* Flecha hacia abajo */}
        </span>
        <span
          style={{
            margin: "5px 5px",
            fontSize: "12px",
          }}
        >
          Giramos ésta fracción
        </span>
      </div>
    </div>
  );
};

export const Ara: React.FC = () => {
  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <span
          style={{
            margin: "5px 5px",
            fontSize: "24px",
          }}
        >
          Ara
        </span>
      </div>
    </div>
  );
};

export const Giramos: React.FC = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          width: "40px",
          marginLeft: "5px",
        }}
      >
        <span
          style={{
            margin: "5px 5px",
            fontSize: "12px",
          }}
        >
          Giramos 2a fracción
        </span>
      </div>
    </div>
  );
};

export const Abans: React.FC = () => {
  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <span
          style={{
            margin: "5px 5px",
            fontSize: "24px",
          }}
        >
          Abans
        </span>
      </div>
    </div>
  );
};

export const Mas: React.FC = () => {
  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <span
          style={{
            margin: "5px 5px",
            fontSize: "24px",
          }}
        >
          +
        </span>
      </div>
    </div>
  );
};

interface MagnitudProps {
  magnitud: string;
  color: string;
}

export const Magnitud: React.FC<MagnitudProps> = ({ magnitud, color }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ color: color }}>
        <span
          style={{
            margin: "5px 5px",
            fontSize: "14px",
          }}
        >
          {magnitud}
        </span>
      </div>
    </div>
  );
};

export const Menos: React.FC = () => {
  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <span
          style={{
            margin: "5px 5px",
            fontSize: "24px",
          }}
        >
          -
        </span>
      </div>
    </div>
  );
};

interface PorcentajeXProps {
  valorX: "%" | "parcial" | "total";
}

export const PorcentajeX: React.FC<PorcentajeXProps> = ({ valorX }) => {
  const equivalencias = {
    "%": "%",
    parcial: "Part",
    total: "Total",
  };

  const equivalenciaValorX = equivalencias[valorX]; // Acceder correctamente a la equivalencia

  return (
    <div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <span
          style={{
            margin: "5px 5px",
            fontSize: "24px",
          }}
        >
          {equivalenciaValorX}
        </span>
      </div>
    </div>
  );
};
