import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListComponents from './components/ListComponents'
import EmployeeList from './components/EmployeeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Testing Axios</h1>
      <ListComponents/>
      <EmployeeList/>
    </>
  )
}

export default App
