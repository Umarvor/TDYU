import React from 'react'
import Navbar from '../Components/Navbar'
import Test from '../Test/Text'
import { Outlet } from 'react-router-dom'
import App from '../App'
function Navbardom() {
  return (
    <div>
      <header><Navbar /></header>
      <main><Outlet /></main>
      <footer><Test /></footer>
    </div>
  )
}

export default Navbardom