import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import ErrorURL from './components/ErrorURL.jsx'
import Layout from './Layout/Layout.jsx'
import Gifts from './components/Gifts.jsx'
import Number from './components/Number.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='number/:idx' element={<Number />} />
      <Route path='/home/gifts' element={<Gifts />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='*' element={<ErrorURL />} />

    </Route >

  ))
ReactDOM.createRoot(document.getElementById('root')).render(




  < React.StrictMode >
    <RouterProvider router={routers} />
  </React.StrictMode >
)
