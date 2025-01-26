import { useState, useCallback, useEffect,useRef } from 'react'

function App() {
  const [Lengthcount, setLengthCount] = useState(8)

  const [numberAllowed, setnumberAllowed] = useState(false)

  const [characterAllowed, setCharacterAllowed] = useState(false)

  const [password, setPassword] = useState("")

  //useRef hook 
  const passwordRef =useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    //if numbers are true
    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= Lengthcount; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(i + " "+char );
      pass += str.charAt(char)
      
    }


    setPassword(pass)
  },
    [Lengthcount, numberAllowed, characterAllowed, setPassword])//this are the variable depending on the password and 



const copyPasswordToClipboard = useCallback(()=>{
  //copy to clip board logic , using useCallback for optimization
//this line we are not using useRef , but this is working but while we click copy it wont show what is selected that effect and all so for that we will add 
passwordRef.current?.select()//this will give nice select feeling to the user
passwordRef.current?.setSelectionRange(0,Lengthcount)
  window.navigator.clipboard.writeText(password)


},[password])


  useEffect(( ) => {
    passwordGenerator()
  } ,[Lengthcount, numberAllowed, characterAllowed,passwordGenerator])



  // const passwordGenerator =()=>{
  //   let pass = ""
  //     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
  //     //if numbers are true
  //     if (numberAllowed) str += "0123456789"
  //     if (characterAllowed) str += "!@#$%^&*-_+=[]{}~`"
  
  //     for (let i = 1; i <= Lengthcount; i++) {
  //       let char = Math.floor(Math.random() * str.length + 1)
  //       console.log(i + " "+char );
  //       pass += str.charAt(char)
        
  //     }
  
  
  //     setPassword(pass)
  // }

  //   useEffect(( ) => {
  //     passwordGenerator()
  //   } ,[Lengthcount, numberAllowed, characterAllowed])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 '
      >
        <h1 className='text-white text-center my-3'>React Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type='text' value={password} className='outline-none w-full py-1 px-3 ' placeholder='password' readOnly
          
          //useRef hook
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
              min={6}
              max={35}
              value={Lengthcount}
              className='cursor-pointer'
              onChange={(e) => { setLengthCount(e.target.value)}}
           style={{width:100}}
           />
            <label>Length : {Lengthcount}</label>
          </div>
<div className='flex items-center gap-x-1'>

<input
type='checkbox' 
value={numberAllowed}
onChange={()=>{setnumberAllowed(!numberAllowed)}}

className='cursor-pointer'
/>
<label> <small>Numbers</small></label>
<input
type='checkbox' 
value={characterAllowed}
onChange={()=>{setCharacterAllowed(!characterAllowed)}}

className='cursor-pointer'
/>
<label><small>Special Characters</small></label>
</div> <a href="https://hungry-timbale-4ea.notion.site/React-Projects-49d032a99ddf4cae8d72d743471bda2c">.</a>
        </div>

      </div>

    </>
  )
}

export default App
