import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Rootlayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default Rootlayout
