import React, { useContext } from 'react'
import './Navbar.css'
import { FaCheckSquare } from "react-icons/fa";
import { BsCloudSunFill } from "react-icons/bs";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { myCotext } from '../../context/DataFetching';
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
const {toggleMode}=useContext(myCotext)
const nav=useNavigate()
const {mode}=useContext(myCotext)
const logout=()=>{
  localStorage.removeItem('login')
nav("/login")
}
  return (
    <>
      <div className={"navbar"}>
        <div className='logo'>
            <a href="#"><b>TODO</b></a>
             <FaCheckSquare  className='checkicon' /> 
        </div>
        <div className='list-container'>
          <ul>
                <NavLink to="/" ><li>Home</li></NavLink>
                <NavLink to="/About" ><li>About</li></NavLink>
                <NavLink to="/Alltodo" ><li>All Todos</li></NavLink>
          </ul>
      
        </div>
        <div></div>
         <div className="btn-container">
         <div className='light-dark-modeicon'>
        {mode==="dark" ?<BsCloudSunFill onClick={toggleMode}/>:<FaMoon onClick={toggleMode}/>}
        </div>
         <div className="logout-btn">
            <button onClick={logout}><b>Logout</b></button>
         </div>
         </div>
      </div>
    </>
  )
}

export default Navbar

                