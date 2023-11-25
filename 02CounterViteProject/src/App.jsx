
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'


function App() {
  let [count, setCount] = useState(0)

  const addValue = ()=>{
setCount((count)=>{
if(count>=20){
  count=20
}else{
  count =count+1;
}
})
  }
const remValue = ()=>{

setCount((count)=>{

  if(count<=0)
  {
    return 0
  }else{
    return count-1;

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
