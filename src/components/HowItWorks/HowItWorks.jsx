import React from "react";
import {
  MdOutlineAssignment,
  MdOutlineBolt,
  MdOutlineBarChart,
} from "react-icons/md";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MdOutlineAssignment />,
      title: "Recogemos tus datos",
      description:
        "Te pedimos información básica de tu consumo eléctrico. Sin tecnicismos.",
    },
    {
      icon: <MdOutlineBolt />,
      title: "Calculamos tu ahorro",
      description:
        "Nuestro sistema estima automáticamente el potencial de tu instalación.",
    },
    {
      icon: <MdOutlineBarChart />,
      title: "Te enviamos el análisis",
      description:
        "Un informe personalizado con ahorro, recomendaciones y próximos pasos.",
    },
  ];

  return (
    <section className="how-section">
      <p className="how-label">Cómo funciona</p>
      <h2 className="how-title">
        Del formulario a la propuesta en
        <span className="how-highlight"> segundos</span>
      </h2>
      <div className="how-grid">
        {steps.map((step, index) => (
          <div className="how-card" key={index}>
            <div className="how-icon">{step.icon}</div>
            <h4 className="how-card-title">{step.title}</h4>
            <p className="how-card-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;