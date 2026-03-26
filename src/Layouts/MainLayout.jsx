import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'

export default function MainLayout() {
  return (
    <div>
        <div>
          <Navbar />
        </div>
        <div className='max-w-7xl mx-auto'>
          <Outlet />
        </div>
        
        <div>
            {/* Footer */}
        </div>
    </div>
  )
}
