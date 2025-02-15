import { useEffect, useRef, useState } from "react";

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
