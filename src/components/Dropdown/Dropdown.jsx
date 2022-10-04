import React, { useEffect } from 'react'
import './Dropdown.css'
export default function Dropdown({items}) {

    const list = items.map((item, index) => <li key={index}>{item}</li>)

    console.log(list)

  return (
    <div className='dropdown'>
        <ul className='list'>
            {list}
        </ul>
    </div>
  )
}
