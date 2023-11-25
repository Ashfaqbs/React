import { useState } from 'react'
import './App.css'
import Card from "./Components/Card"
import Code from './Components/Code'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card name={'Delba'} btnText="Click Me" />
      <Card name={'Sony'} btnText="Visit Me" />
      <br />
      <hr />
      <Code />
    </>
  )
}

export default App
