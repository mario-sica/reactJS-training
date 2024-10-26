import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState("");

  function addTodos() {
    if (inputVal !== "") {
      setTodos([...todos, inputVal]);
      setInputVal("");
    } else {
      alert("Input field cannot be empty");
    }
  }

  function handleInputChange() {
    const value = event.target.value;
    setInputVal(value);
  }

  function handleReset() {
    setTodos([]);
  }

  function removeTodo(index) {
    const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input type="text" value={inputVal} onChange={handleInputChange} />
      <button onClick={addTodos}>Add todo</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
