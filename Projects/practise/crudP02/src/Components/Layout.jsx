import React from 'react'
import Navbar from './Navbar'

import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Contact from './Contact'
import { Aboutus } from './Aboutus'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />

            <Aboutus />
            <Contact />

            <Footer />



        </>
    )
}

export default Layout