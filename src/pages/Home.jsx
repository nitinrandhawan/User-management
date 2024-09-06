import React from 'react';
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom';
function Home() {
  
  return (
    <div className="min-h-screen">
    <Navbar />
    <div > 
    <Outlet/>
    </div>
    <footer className="text-center p-4">
      <p className="text-sm text-gray-500">&copy; 2023 UserManagementPlus. All rights reserved.</p>
    </footer>
  </div>

  )
}



export default Home;
