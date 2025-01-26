import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Your Logo</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            Menu
          </button>
        </div>
        <div className={`hidden md:flex space-x-4 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <Link to='' className="text-white">Home</Link>
          <Link to='addemployees' className="text-white">Add Employees</Link>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Header