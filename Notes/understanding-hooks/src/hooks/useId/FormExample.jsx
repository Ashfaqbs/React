import { useId } from "react";

function FormExample() {
  const usernameId = useId(); // Step 1: Generate unique ID
  const emailId = useId();

  return (
    <div>

<h3>userNameID: {usernameId} emailID: {emailId}</h3>   
    </div>
  );
}

export default FormExample;
