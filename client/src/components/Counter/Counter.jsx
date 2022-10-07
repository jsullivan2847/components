import React, { useState, useEffect } from 'react'

export default function Counter({setAmount, amount, items, setItems}) {


    const handleClick = () => {
        setAmount(amount + 1)
        setItems(items.concat(amount + 1))
    }


  return (
    <div>
        <div>
            {amount}
        </div>
        <button onClick={handleClick}>+</button>
        <button onClick={() => setAmount(0)}>reset</button>
    </div>
  )
}
