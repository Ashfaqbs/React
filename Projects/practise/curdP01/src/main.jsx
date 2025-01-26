import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import ListEmployees from './components/ListEmployees/ListEmployees.jsx'
import Employees from './components/ActionEmployee/Employees.jsx'




const routers = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<ListEmployees />} />
      <Route path='/employees' element={<ListEmployees />} />
      <Route path='employees/:id' element={<Employees />} />
      <Route path='addemployees' element={<Employees />} />

    </Route>
  )


)

ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>

    <RouterProvider router={routers} />


  </React.StrictMode>
)
