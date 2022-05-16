import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
    console.log(newTodo);
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title); //retrieves data and shows it in input.
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]); //a unique id for each item in the to do list area
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a to do task... "
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="add-button" type="submit">
        {editTodo ? "Confirm" : "Add"}{" "}
        {/* Changes the add button value to the set value to edit the to do list  */}
      </button>
    </form>
  );
};

export default Form;
