import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function MainLayout() {
  return (
    <div>
        <div>
          <Navbar />
        </div>
        <div className='max-w-7xl mx-auto min-h-[calc(100vh-100px)]'>
          <Outlet />
        </div>
        
        <div>
            <Footer />
        </div>
    </div>
  )
}
