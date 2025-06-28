import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className="bg-green-200 shadow-md w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          DigiMart
        </h1>
        <nav className="space-x-12">
          <Link to="/" className="text-gray-700 hover:text-blue-800">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;