import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{question}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <p className="accordion-content">{answer}</p>}
    </div>
  );
};

export default Accordion;
