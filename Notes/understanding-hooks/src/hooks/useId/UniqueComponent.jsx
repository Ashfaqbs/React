import { useId } from "react";

function UniqueComponent() {
  const uniqueId = useId(); // Unique ID per instance

  return (
    <div>
      <h3>Component ID: {uniqueId}</h3>
    </div>
  );
}

function ParentComponent() {
  return (
    <div>
      <h2>useId Example - Unique Components</h2>
      <UniqueComponent />
      <UniqueComponent />
      <UniqueComponent />
    </div>

    /*
    OP
useId Example - Unique Components
Component ID: :r0:
Component ID: :r1:
Component ID: :r2:
    */
  );
}

export default ParentComponent;
