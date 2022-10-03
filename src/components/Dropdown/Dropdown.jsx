import React, { useEffect } from 'react'
import './Dropdown.css'
export default function Dropdown({amount}) {
    useEffect(() => {
        console.log('new')
    }, [amount])
  return (
    <div className='dropdown'>
        <ul className='list'>
            <li>{amount}</li>
        </ul>
    </div>
  )
}
