import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../todoSlice/todoSlice";
import { useState } from "react";
import { Link } from "react-router-dom";


function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo("");
    }
  };

  return (
    <div className="app">
      <div className="todo-section">
        <h2>Todo</h2>
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            value={newTodo}
            placeholder="Add new task"
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button>Submit</button>
        </form>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />

              <span className={todo.completed ? "Completed" : ""}>
                {todo.text}
              </span>

              <button
                className="todo-del-btn"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div><Link to="/counter">Link to Counter-app</Link></div>
      </div>
    </div>

  );
}

export default Todo;