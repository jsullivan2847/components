import React, { useState, useEffect } from 'react'
import './Nav.css'
import Dropdown from '../Dropdown/Dropdown';

export default function Nav({items}) {


    const [isOpen, setIsOpen] = useState(false)
    const [newItems, setNewItems] = useState(true)
    const handleClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
        if(newItems){
            setNewItems(false)
        }
    }
    
    useEffect(() => {
        setNewItems(true)
    }, [items])

  return (
    <nav>
        <ul className='nav'>
            <li>
                home
            </li>
            <li>
                profile
            </li>
            <li onClick={handleClick} className='notif'>
                {isOpen? <Dropdown items={items}/> : <></>}
                {newItems ? <div className='icon'></div> : <></>}
                hello
            </li>
            <li><button onClick={() => setNewItems(true)}>+ </button></li>
        </ul>
    </nav>
  )
}

