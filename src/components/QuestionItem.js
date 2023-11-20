import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <p>{prompt}</p>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
    </li>
  );
}

export default QuestionItem;
