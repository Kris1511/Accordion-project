import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import React, { useState } from "react";

const Singlequestion = ({ id, title, info, activeId, toggleQuestion }) => {
  // const [showInfo, setShowInfo] = useState(false);

  const isActive = id === activeId;
  console.log(isActive);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Singlequestion;
