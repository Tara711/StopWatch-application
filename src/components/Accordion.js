import React, { useState } from "react";
import "./Accordion.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Accordion({ title, children }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <div className={`accordion ${isActive ? "active" : ""}`}>
      <div className="question">
        <h3>{title}</h3>
        {isActive ? (
          <>
            <AiOutlineMinus onClick={handleClick} />
          </>
        ) : (
          <AiOutlinePlus onClick={handleClick} />
        )}
        {isActive && <div className="answer">{children}</div>}
      </div>
    </div>
  );
}
export default Accordion;
