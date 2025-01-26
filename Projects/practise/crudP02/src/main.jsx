import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from '../src/Components/Layout.jsx'
import Employees from '../src/Components/Employee.jsx'
import EmployeeList from './Components/EmployeeList.jsx'
import ViewEmp from './Components/ViewEmp.jsx'

const router = createBrowserRouter(



  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<EmployeeList />} />
      <Route path='/employees' element={<EmployeeList />} />
      <Route path='addemployees' element={<Employees />} />
      <Route path='updateEmp/:id' element={<Employees />} />
      <Route path='viewEmp/:id' element={<ViewEmp />} />
    </Route>




  )




)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
