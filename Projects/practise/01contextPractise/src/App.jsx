import './App.css'
import Details from './component/Details'
import Login from './component/Login'
import User from './component/User'
import UserContextProvider from './context/UserContextProvider'
import CarDetails from './component/CarDetails'
function App() {

  return (
    <UserContextProvider>
      <h1>React Context API testing</h1>
      <Login />
      <br />
      <User />

      <br />
      <Details />
      <hr />
      <CarDetails />
    </UserContextProvider>
  )
}

export default App
