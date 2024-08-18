import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavigation = (path) => {
    setNav(false); // Close the mobile menu after navigation
    navigate(path);
  };
  return (
    <nav className="p-6 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2"  onClick={() => handleNavigation('/')}>
          <AiFillGithub size={32} />
          <span className="text-xl font-bold">GitHub Profile Viewer</span>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li onClick={() => handleNavigation('/')} >Home</li>
          <li onClick={() => handleNavigation('/Contact')} >My Github</li>
        </ul>
        <div className="md:hidden" onClick={handleNav}>
          {!nav ? <FaBars size={28} /> : <FaTimes size={28} />}
        </div>
      </div>
      {nav && (
        <ul className="md:hidden bg-gray-800 text-white space-y-4 p-6">
          <li><a href="#home" className="block hover:text-yellow-400">Home</a></li>
          <li><a href="#contact" className="block hover:text-yellow-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
