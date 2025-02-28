// src/components/Navbar/Navbar.jsx
//added to top of screen//
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">
          Podcast App
        </Link>
        <div>
          <Link to="/favorites" className="text-white mx-4">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;