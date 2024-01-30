import { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'

function App() {


  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  return (
    <>
      <h1>A blog with appwrite</h1>
    </>
  )
}

export default App
