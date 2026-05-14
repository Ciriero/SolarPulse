import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./form.css";
import "../Modal/modal.css";

const Form = () => {
  const INITIAL_STATE = {
    name: "",
    email: "",
    zipcode: "", //use string and no number for de .lenght validation
    consumption: "",
    comments: "",
  };

  const [term, setTerm] = useState(INITIAL_STATE);
  //Error message
  const [warning, setWarning] = useState({ isOpen: false, text: "" });

  const handleForm = (e) => {
    e.preventDefault();
    const { name, email, zipcode, consumption } = term;
    // Validations
    if (
      !name.trim() ||
      !email.trim() ||
      !zipcode.trim() ||
      !consumption.trim()
    ) {
      setWarning({
        isOpen: true,
        text: "Por favor, completa los campos obligatorios para calcular tu ahorro",
      });
      return;
    }

    if (zipcode.length !== 5) {
      setWarning({ isOpen: true, text: "Introduce un cp correcto" });
      return;
    }

    //TODO: replace with Make webhook //
    console.log("Datos listos para Make:", term);
  };
  //Only one handle for all inputs
  const handleInputs = (e) => {
    setTerm({ ...term, [e.target.name]: e.target.value });
  };

  const closeModal = () => {
    setWarning({ isOpen: false, text: "" });
  };

  return (
    <section className="form-section">
      {warning.isOpen && (
        <div className="modal-overlay">
          <Modal closeModal={closeModal} content={warning.text} />
        </div>
      )}
      <div className="form-intro">
        <h2>Descubre cuánto puede ahorrar tu empresa</h2>
        <p>
          Analizamos tu consumo y ubicación para calcular el potencial real de
          una instalación solar. Sin compromisos.
        </p>
        <div className="form-stat">
          <span>Ahorro medio del 40% en la factura eléctrica</span>
          <span>Amortización en 4 a 6 años</span>
          <span>Más de 25 años de vida útil</span>
        </div>
      </div>

      <div className="form-card">
        <h3>Calcula tu ahorro solar</h3>
        <p>Rellena los datos y te enviamos el análisis personalizado</p>

        <form onSubmit={handleForm}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                value={term.name}
                onChange={handleInputs}
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={term.email}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="zipcode">Código postal</label>
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              value={term.zipcode}
              onChange={handleInputs}
            />
          </div>

          <div className="form-field">
            <label htmlFor="consumption">Consumo</label>
            <select
              name="consumption"
              id="consumption"
              value={term.consumption}
              onChange={handleInputs}
            >
              <option value="">-- Selecciona consumo --</option>
              <option value="1000-5000">1.000 – 5.000 kWh</option>
              <option value="5000-10000">5.000 – 10.000 kWh</option>
              <option value="10000-20000">10.000 – 20.000 kWh</option>
              <option value="20000+">+ 20.000 kWh</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="comments">
              Cuéntanos más sobre tu consumo<span>(opcional)</span>
            </label>
            <textarea
              name="comments"
              id="comments"
              value={term.comments}
              onChange={handleInputs}
              placeholder="Ej: Mi factura de luz es muy alta y pago mucho para mi consumo..."
              rows={5}
            />
          </div>

          <button className="btn-submit" type="submit">
            Calcular mi ahorro →
          </button>
          <p className="form-note">
            Sin spam. Tus datos se usan solo para elaborar el análisis.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Form;
