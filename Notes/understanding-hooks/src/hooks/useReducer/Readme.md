
## **🟢 Example: Managing a TODO List Using `useReducer`**  
We will create a **Todo List** where users can:  
✅ **Add a new task**  
✅ **Mark a task as completed**  
✅ **Delete a task**  

### **1️⃣ Define the Reducer Function**
```jsx
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
```
📌 **Why `useReducer` here?**  
- Unlike `useState`, this can **manage a complex list of items**.  
- The reducer function keeps the logic **clean and separate** from UI.  

---

### **2️⃣ Create the `TodoList` Component**
```jsx
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
```

---

### **3️⃣ Use `TodoList` in `App.js`**
```jsx
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <h1>useReducer Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
```

---

### **📌 Expected Behavior**
1. Enter a task in the input field and click **"Add Task"** ➝ The task appears in the list.  
2. Click **"Complete"** ➝ The task gets a strikethrough.  
3. Click **"Undo"** ➝ The task is marked as incomplete again.  
4. Click **"Delete"** ➝ The task is removed.  

---

### **🔥 Why This is Better Than `useState`**
✔ Instead of managing multiple `useState` variables (`todos`, `completed` state, etc.), we **combine all logic** inside a single `useReducer`.  
✔ Each action (`add`, `toggle`, `delete`) has a clear role, making the component **easier to maintain**.  
✔ If the app grows, we can **easily extend** the reducer without cluttering the UI code.  

---

