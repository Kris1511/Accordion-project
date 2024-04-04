import { useState } from "react";
import Data from "./Data/data";
import Question from "./components/Question";

function App() {
  const [questions, setQuestions] = useState(Data);

  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Question
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
}

export default App;
