import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar() {
  const obj = {
    textDecoration: "none",
    padding: "0 12px",
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "700",
    color:"black"
  }

  const navStyle = {
    textDecoration: "none",
    padding: "10px ",
    // borderBottom: "2px solid black",
    background: "linear-gradient(135deg,rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
    // background: rgba(255, 255, 255, 0.1); 
    backdropFilter: " blur(5px)",
    borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
  }
  return (
    <>
      <nav style={navStyle }>
        <NavLink style={obj} to="/"> Home </NavLink>
        <NavLink style={obj} to="/formik"> FormicForm </NavLink>
        <NavLink style={obj} to="/formikcomp"> FormicComp </NavLink>
        <NavLink style={obj} to="/bootstrap"> BootStrap </NavLink>
        <NavLink style={obj} to="/alert"> Alert </NavLink>

      </nav>
    </>
  )
}

export default Navbar
