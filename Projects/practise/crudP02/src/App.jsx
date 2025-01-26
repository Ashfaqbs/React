import './App.css'
import Navbar from './Components/Navbar'
import { Aboutus } from './Components/Aboutus'
import Contact from './Components/Contact'
import EmployeeList from './Components/EmployeeList'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <EmployeeList />
      <Aboutus />
      <Contact />
      <Footer />

    </>
  )
}

export default App
