import React, { useState } from 'react';

function AcordeonItem({ question, answer }) {
  const [taAbierto, setIsOpen] = useState(false);

  const cambiarAcordeon = () => {
    setIsOpen(!taAbierto);
  };

  return (
    <div className={`accordion_item ${taAbierto ? "active" : ""}`}>
      <button className="button" onClick={cambiarAcordeon}>
        <p>{question}</p> 
      </button>
      <div className={`answer_wrapper ${taAbierto ? "open" : ""}`}>
        <div className="answer">{answer}</div>
      </div>
    </div>
  );
}

export default AcordeonItem;

