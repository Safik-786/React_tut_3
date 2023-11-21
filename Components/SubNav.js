import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function SubNav() {
    const obj = {
        textDecoration: "none",
        padding: "0 12px",
        fontSize: "20px",
        textAlign: "center",
        fontWeight: "700",
      }
    const navStyle = {
        textDecoration: "none",
        padding: "10px ",
        // borderBottom: "2px solid black",
        background: "linear-gradient(white, rgb(146, 216, 242))",
        // background: rgba(255, 255, 255, 0.1); 
        backdropFilter: " blur(5px)",
        borderBottom: '1.5px solid rgba(255, 255, 255, 0.2)',
      }
  return (
    <div style={{textAlign:'center'}}>
    <div style={navStyle} >
      <NavLink style={obj} to="home">Button</NavLink>
      <NavLink style={obj} to="alert">DismisAlert</NavLink>
      <NavLink style={obj} to="grid">GridAndCont</NavLink>
      <NavLink style={obj} to="card">Card</NavLink>
      <NavLink style={obj} to="navbar">Navbar</NavLink>
    </div>
    <Outlet/>
    
    </div>
  )
}

export default SubNav
