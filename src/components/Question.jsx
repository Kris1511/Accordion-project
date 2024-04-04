import React from "react";
import Singlequestion from "./Singlequestion";

const Question = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>Question</h1>
      {questions.map((question) => {
        return (
          <Singlequestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};

export default Question;
