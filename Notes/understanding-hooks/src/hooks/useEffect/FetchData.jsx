import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <h3>Fetched Data:</h3>
      {data ? <p>{data.title}</p> : <p>Loading...</p>}
    </div>
  );
}

export default FetchData;
