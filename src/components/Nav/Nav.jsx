import React, { useState } from 'react'
import './Nav.css'
import Dropdown from '../Dropdown/Dropdown';

export default function Nav({amount}) {

    const active = true;
    const [isHovering, setIsHovering] = useState(false)
    const handleMouseOver = () => {
        setIsHovering(true);
    }
    const handleMouseLeave = () => {
        setIsHovering(false);
    }


  return (
    <nav>
        <ul className='nav'>
            <li>
                home
            </li>
            <li>
                profile
            </li>
            <li onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='notif'>
                {isHovering ? <Dropdown/> : <></>}
                {active ? <div className='icon'></div> : <></>}
                hello
            </li>
        </ul>
    </nav>
  )
}

