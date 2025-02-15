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
