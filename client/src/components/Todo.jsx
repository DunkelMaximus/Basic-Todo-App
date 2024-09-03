import { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import axios from "axios";

const Todo = ({ id, todo, setTodoAdded }) => {
  const [editedTodo, setEditedTodo] = useState(todo);
  const [editClicked, setEditClicked] = useState(false);

  const handleEdit = () => {
    setEditClicked((val) => !val);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3001/api/v1/todos/${id}`)
      .then((res) => setTodoAdded((val) => !val))
      .catch((err) => console.log(err));
  };

  const handleDone = () => {
    axios
      .patch(`http://localhost:3001/api/v1/todos/${id}`, { todo: editedTodo })
      .then((res) => {
        setEditClicked((val) => !val);
        setTodoAdded((val) => !val);
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    setEditClicked((val) => !val);
  };

  return (
    <li key={id} className="todo-line">
      {editClicked ? (
        <>
          <span style={{ width: "90%" }}>
            <input
              type="string"
              className="edit-input"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? handleDone() : null)}
            />
          </span>

          <span onClick={handleDone}>
            <DoneOutlinedIcon className="icon" />
          </span>
          <span onClick={handleCancel}>
            <CloseOutlinedIcon className="icon" />
          </span>
        </>
      ) : (
        <>
          <p className="todo">{todo}</p>
          <span onClick={handleEdit}>
            <EditOutlinedIcon className="icon" />
          </span>
          <span onClick={handleDelete}>
            <DeleteOutlineOutlinedIcon className="icon" />
          </span>
        </>
      )}
    </li>
  );
};

export default Todo;
