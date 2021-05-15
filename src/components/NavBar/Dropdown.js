import React, {useState} from 'react'
 import {Link} from "react-router-dom"
import './dropdown.css'
import {NavbarMenuItems} from './NavbarMenuItems'



const Dropdown = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

    return (
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {NavbarMenuItems.map((item, index)=>{
                return (
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={()=> setClick(false)}>{item.title} </Link>
                    </li>
                )
            })}
        </ul >
    )
}

export default Dropdown
