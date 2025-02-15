### **🟢 Example: Sharing an Array Using useContext**  

#### 📝 **Concept:**  
We will create a `UserContext` that provides an array of users. Different components will consume this context and display the data.

---

### **1️⃣ Create the Context (UserContext.js)**
```jsx
import { createContext } from "react";

// Creating Context and passing an initial empty array
const UserContext = createContext([]);

export default UserContext;
```

📌 **Explanation:**  
- `createContext([])` creates a context with an empty array as the default value.

---

### **2️⃣ Provide Data in the Parent Component (UserProvider.js)**
```jsx
import UserContext from "./UserContext";

const users = [
  { id: 1, name: "Ashfaq" },
  { id: 2, name: "John" },
  { id: 3, name: "Jane" },
];

function UserProvider({ children }) {
  return (
    <UserContext.Provider value={users}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
```

📌 **Explanation:**  
- The `users` array is passed into `UserContext.Provider`.  
- Any child component inside `UserProvider` can now access this array.

---

### **3️⃣ Consume Data in a Component (UserList.js)**
```jsx
import { useContext } from "react";
import UserContext from "./UserContext";

function UserList() {
  const users = useContext(UserContext);

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
```

📌 **Explanation:**  
- `useContext(UserContext)` gives direct access to the `users` array.  
- The array is mapped into a list of `<li>` elements.

---

### **4️⃣ Use Everything in App.js**
```jsx
import UserProvider from "./UserProvider";
import UserList from "./UserList";

function App() {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  );
}

export default App;
```

📌 **Explanation:**  
- `UserProvider` wraps the `UserList`, making users available in context.  
- `UserList` fetches and displays the user list.

---

### **📌 Output in Browser**
```
User List
- Ashfaq
- John
- Jane
```

---

### **💡 Key Learnings**
✔ `createContext([])`: Creates a context for an array.  
✔ `useContext(UserContext)`: Allows access to the shared data.  
✔ `Context.Provider`: Wraps components to provide the data.  

