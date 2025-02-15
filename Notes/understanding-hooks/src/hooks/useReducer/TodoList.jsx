import { useReducer, useState } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];

    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    dispatch({ type: "add", payload: input });
    setInput("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add Task</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
            <button onClick={() => dispatch({ type: "toggle", payload: todo.id })}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => dispatch({ type: "delete", payload: todo.id })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
