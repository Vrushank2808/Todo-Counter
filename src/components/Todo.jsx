import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, completeTodo } from "../todoSlice/todoSlice.js";
import { useState } from "react";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState(""); 

  console.log("Todos:", todos);

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      dispatch(addTodo(input.trim())); 
      setInput(""); 
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {Array.isArray(todos) && todos.map((todo) => ( 
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(completeTodo(todo.id))} 
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.todo}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a todo"
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddTodo} 
      />
    </div>
  );
};

export default Todo;
