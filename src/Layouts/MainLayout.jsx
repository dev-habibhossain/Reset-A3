import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'

export default function MainLayout() {
  return (
    <div>
        <div>
          <Navbar />
        </div>
        <Outlet />
        <div>
            {/* Footer */}
        </div>
    </div>
  )
}
