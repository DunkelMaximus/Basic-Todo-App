import { useState } from "react";
import axios from "axios";

const TodoInput = ({ setTodoAdded }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleClick = () => {
    axios
      .post("http://localhost:3001/api/v1/todos", { todo })
      .then((res) => {
        setTodoAdded((todoAdded) => !todoAdded);
        setTodo("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="input-container">
      <input
        className="todo-input"
        type="string"
        onChange={handleChange}
        value={todo}
        placeholder="Enter Todo"
        onKeyDown={(e) => (e.key === "Enter" ? handleClick() : null)}
      />
      <button className="todo-add" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
