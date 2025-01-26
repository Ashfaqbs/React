import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Project from './components/Project/Project.jsx'
import Contact from './components/Contacts/Contacts.jsx'
import Github, { githubInfoLoader } from './components/github/github.jsx'
import User from './components/User/User.jsx'
import Sonu from './components/Sonu/Sonu.jsx'
import ErrorRoutes from './components/ErrorRoutes/ErrorRoutes.jsx'
import LoginForm from './components/Login/Login.jsx'
import AccessDenied from './components/AccessDenied/AccessDenied.jsx'

// const routers = createBrowserRouter([

//   {
//     path: "/",//default starting path
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/home",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "projects",
//         element: <Project />
//       }, {
//         path: "contacts",
//         element: <Contact />
//       }, 
//       {
//         path: "github",
//         element: <Github/>
//       }

//     ]


//   }

// ])

const routers = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/home' element={<Home />} />

      <Route path='about' element={<About />} />

      <Route path='/about/sonu' element={<Sonu />} />
      <Route path='projects' element={<Project />} />
      <Route path='contacts' element={<Contact />} />
      <Route path='login' element={<LoginForm />} />
      <Route path='accessDenied' element={<AccessDenied />} />

      <Route
        path='github'
        loader={githubInfoLoader}
        element={<Github />} />
      <Route path='user/:userId' element={<User />} />


      <Route path='*' element={<ErrorRoutes />} />
    </Route>
  )

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
  </React.StrictMode>
)
