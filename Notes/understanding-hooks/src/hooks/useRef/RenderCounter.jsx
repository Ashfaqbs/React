import { useRef, useState } from "react";

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
