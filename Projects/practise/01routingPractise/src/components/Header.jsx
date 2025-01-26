import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>

            <main>

                <ul>
                    <li ><NavLink to='/home/gifts' className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    } > Gifts</NavLink> </li>

                    <li>  <NavLink to='/about' className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }> About Us</NavLink> </li>
                    <li> <NavLink to='/contact' className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-600" : "text-gray-600"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }> Contact Us</NavLink></li>
                </ul>

            </main>


        </div>
    )
}

export default Header