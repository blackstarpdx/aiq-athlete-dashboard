import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold">AiQ</div>
      <div>
        <Link to="/" className="mr-4 hover:text-orange-400">Home</Link>
        <Link to="/dashboard" className="mr-4 hover:text-orange-400">Dashboard</Link>
        <Link to="/upload" className="mr-4 hover:text-orange-400">Upload</Link>
        <Link to="/analysis" className="hover:text-orange-400">Analysis</Link>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;