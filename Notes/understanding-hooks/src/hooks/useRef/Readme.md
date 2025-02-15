### **🔵 Exploring `useRef` in React**  

#### **💡 What is `useRef`?**  
- `useRef` is used to **persist values** across renders **without causing re-renders**.  
- It’s mainly used for **DOM manipulation**, **storing previous values**, and **holding mutable data**.  

---

### **🟢 Example 1: Focus on Input Field using `useRef`**  
Let's create an input field and **focus on it** when clicking a button.

#### **1️⃣ Code Implementation**
```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null); // Step 1: Create a ref

  const focusInput = () => {
    inputRef.current.focus(); // Step 3: Use ref to focus input
  };

  return (
    <div>
      <h2>useRef Example - Focus Input</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

#### **📌 Explanation**
1. **Created a ref** → `useRef(null)`  
2. **Attached it to the input field** → `<input ref={inputRef} />`  
3. **Clicked button → Focuses on input field** using `inputRef.current.focus()`  

🛠 **Use case:** Used for **directly interacting with DOM elements** without using `document.querySelector`.  

---

### **🟡 Example 2: Storing Previous Value using `useRef`**
Now, let’s **store the previous count value** and show it before updating.

#### **2️⃣ Code Implementation**
```jsx
import { useState, useEffect, useRef } from "react";

function PreviousCount() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(null); // Step 1: Create a ref

  useEffect(() => {
    prevCountRef.current = count; // Step 3: Update ref after every render
  }, [count]);

  return (
    <div>
      <h2>useRef Example - Previous Count</h2>
      <h3>Current Count: {count}</h3>
      <h4>Previous Count: {prevCountRef.current}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousCount;
```

#### **📌 Explanation**
1. **Created a ref** → `useRef(null)` to store the previous count.  
2. **Updated the ref in `useEffect`** after each render.  
3. **Displayed `prevCountRef.current`** to track previous state.  

🛠 **Use case:** Useful when we need to **remember past values without triggering re-renders**.

---

### **🟣 Example 3: Counting Renders without Re-renders**
Let’s track **how many times a component has rendered** using `useRef`.

#### **3️⃣ Code Implementation**
```jsx
import { useState, useRef } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1); // Step 1: Create ref with initial value

  renderCount.current += 1; // Step 2: Increment on every render

  return (
    <div>
      <h2>useRef Example - Render Counter</h2>
      <h3>Component Rendered: {renderCount.current} times</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default RenderCounter;
```

#### **📌 Explanation**
1. **Created a ref with initial value 1** → `useRef(1)`.  
2. **Incremented ref value on every render**.  
3. **Displayed render count** without causing extra re-renders.  

🛠 **Use case:** Useful when tracking **renders, performance optimization, or debugging**.

---

### **🔥 Summary**
| Feature          | `useState` | `useRef` |
|-----------------|-----------|---------|
| **Causes Re-render?** | ✅ Yes | ❌ No |
| **Stores Previous Values?** | ❌ No | ✅ Yes |
| **DOM Manipulation?** | ❌ No | ✅ Yes |
| **Performance Friendly?** | ❌ No (causes re-renders) | ✅ Yes (no re-renders) |

---
### **🚀 When to Use `useRef`?**
✅ When we **don’t want re-renders** (e.g., storing previous values).  
✅ When we **interact with the DOM** (e.g., focusing an input).  
✅ When we **track renders** without affecting the component state.  
