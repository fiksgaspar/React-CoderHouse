import React, {useState, useContext, useEffect} from 'react'
 import CartWidget from './CartWidget'
 import {Link} from "react-router-dom"
import '../../index.css'
import './navbar.css'
import Dropdown from './Dropdown'
import ButtonSign from './ButtonSign'
import { CartContext } from '../../Context/CartContext'
import { UserContext } from '../../Context/UserProvider'
import { auth, logOut, signInWithMail } from '../../firebase'




export const Navbar = () => {
    const {user, inicioSesion} = useContext(UserContext)
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () =>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave = () =>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }
  

    return (
       
            <nav className="navbar">
                <Link to="/" className="navbar-logo">New Closet</Link>  
            
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu' }>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Productos <i className="fas fa-caret-down"></i>
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-links" onClick={closeMobileMenu}><CartWidget/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/on-sale" className="nav-links" onClick={closeMobileMenu}>ON SALE</Link>
                    </li>
                    <li className="nav-item">
                       {!user==null ? <div><button type="button" className="nav-links-mobile" onClick={logOut}>Log Out</button><span>Hola {user.displayName}</span></div>
                       :
                       <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>} 
                    </li>
                </ul>
                <ButtonSign />
            </nav>

       
    )
}
