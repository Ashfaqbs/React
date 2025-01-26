import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'


//1 

function MyMainComponent() {
  return (

    <a>This is a Anchor tag Coming from the my main component JSX</a>
  )
}

// 2 This is how React works internally
// const ReactElement = React.createElement(

// 'a',
// {href:"https://google.com",target:'_blank'},
// 'Click to visit google'

// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//   ReactElement
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   {/* <App/> */}
    <Chai/>
    {/* // MyMainComponent()this works as well but we will not use it  */}

  </>
)
