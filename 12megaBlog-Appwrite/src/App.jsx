import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'

function App() {


  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    authService.getCurrentUser()
      .then((userData)=>{

      })
      .finally()
  }, [])

  return (
    <>
      <h1>A blog with appwrite</h1>
    </>
  )
}

export default App
