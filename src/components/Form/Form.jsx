import React, { useState } from "react";

function Form(props) {
  // form submit handler
  function submitHandler(e) {
    e.preventDefault();

    // gaurd clause in Js
    if (!input) return;

    const formData = {
      description: input,
      quantity: option,
      packed: false,
      id: Math.random(),
    };
    // console.log(formData);

    // pulling new item to App.jsx with keeping previous state
    props.items((prev) => [...prev, formData]);

    // reset input & option
    updateInput("");
    setOption(1);
  }

  // userinput updater
  const [input, updateInput] = useState("");

  // user input extracter
  function userInput(e) {
    updateInput(e.target.value);
  }

  // select option input ui updater
  const [option, setOption] = useState(1);

  // console.log(input)
  // console.log(option)

  return (
    <form onSubmit={submitHandler} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={option}
        onChange={(e) => setOption(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={userInput}
        value={input}
        type="text"
        placeholder="item..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
