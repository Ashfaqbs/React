import React from 'react'

export default function CodeDef()
{


const code =`
import './App.css'
import { useState } from 'react'


function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    setCount((count) => {
      if (count >= 20) {
        return count = 20
      } else {
        return count = count + 1;
      }
    })
  }
  const remValue = () => {

    setCount((count) => {

      if (count <= 0) {
        return 0
      } else {
        return count - 1;

      }
    })

  }
  return (
    <>
      <h1>Chai aur react | Counter {count}</h1>
      <h2>Change value :  {count}</h2>

      <button onClick={addValue}>Add value</button>
      <button onClick={remValue}>Remove value</button>

    </>
  )
}

export default App
`
    return(
<>


<hr/>
<h2>Code :</h2>
<pre>{code}</pre>

</>

    )
}
