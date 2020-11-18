import React from 'react';
import logo  from '../media/Chez-Healthcare-Digital-Marketing-logo.png';
import '../styles/navbar.css';
import {NavLink} from 'react-router-dom';



const Navbar = () =>{
    const openMenu=()=>{
       const navmobile = document.querySelector('.navmobile');
       navmobile.classList.toggle("open");
    }

    return(
        <div>
            <nav className="nav">
                <div className="navlogo">
                    <NavLink className="" to="/" style={{padding:'0', margin:'0'}}>
                      <img src={logo} alt="Chez-Healthcare-Digital-Marketing-logo" className="log"/>
                    </NavLink>
                </div>
                <div className="navdesktop">
                    <button  className="navbutton" onClick={openMenu} > &#9776; </button >
                    <NavLink to="/" className="navlinkdesktop" > Home </NavLink>
                    <a href="#cta" className="navlinkdesktop" > Contact </a>
                    <NavLink to="/blog" className="navlinkdesktop" > Blog </NavLink>
                </div>
            </nav>
            <div className="navmobile">
               <span onClick={openMenu}><NavLink to="/" className="navlinkmobile"> Home </NavLink ></span>
               <span onClick={openMenu}><NavLink to="#cta" className="navlinkmobile"> Contact </NavLink></span>
               <span onClick={openMenu}><NavLink to="/blog" className="navlinkmobile"> Blog </NavLink></span>
          </div>
        </div>
    )
}



export default Navbar