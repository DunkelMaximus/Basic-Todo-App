import { useState, useEffect } from "react";
import axios from "axios";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const MainContent = () => {
  const [todos, setTodos] = useState([]);
  const [todoAdded, setTodoAdded] = useState(false);

  const getTodos = async () => {
    axios
      .get("http://localhost:3001/api/v1/todos")
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getTodos();
  }, [todoAdded]);

  return (
    <main className="app-content">
      <TodoInput setTodoAdded={setTodoAdded} />
      {todos.length > 0 ? (
        <TodoList todos={todos} setTodoAdded={setTodoAdded} />
      ) : (
        <div>No todo</div>
      )}
    </main>
  );
};

export default MainContent;
