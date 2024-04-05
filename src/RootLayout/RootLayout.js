import React from 'react'
import './RootLayout.css'
import Navbar from '../pages/Navbar/Navbar'

const RootLayout = ({children}) => {
  return (
    <div className='layout'>
        <div className='nav-layout'><Navbar /></div>
        <main className='layout-main'>{children}</main>
    </div>
  )
}

export default RootLayout