import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from "react-router-dom"
import "./navbar.css"
import logo from "../images/logo.png"
import {FaBars} from "react-icons/fa"
import {MdClose} from "react-icons/md"

import {links} from "../data"
const Navbar = () => {
    const [isNavShowing, setisNavShowing] = useState(false);
  return (
    <nav>
        <div className="container nav-container">
        
            <Link to="/" className='logo' onClick={() => setisNavShowing(false)}>
                <img src={logo} alt="Nav Logo" />
            </Link>
            <ul className ={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
                {
                    links.map(({name,path,icon},index) =>{
                        return(
                            <li key={index}>
                                <NavLink to = {path} className = {({isActive}) => isActive ? 'active-nav' : ''}  onClick={() => setisNavShowing(prev => !prev)}> <span>{icon}</span> {name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav-toggle-btn" onClick={() => setisNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdClose /> : <FaBars />
                }
                
            </button>
        </div>
    </nav>
  )
}

export default Navbar