import Todo from "../components/Todo";

const TodoList = ({ todos, setTodoAdded }) => {
  return (
    <div className="todo-list">
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo._id}
              id={todo._id}
              todo={todo.todo}
              setTodoAdded={setTodoAdded}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
