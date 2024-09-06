import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="md:text-center bg-white shadow p-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center  ">
      <h1 className="text-2xl font-medium text-center md:text-left mb-4 md:mb-0">
        UserManagementPlus
      </h1>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center">
        <Link to='/' className="text-gray-600 hover:text-gray-800">Home</Link>
        <Link to='/add-user' className="text-gray-600 hover:text-gray-800">Add User</Link>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
