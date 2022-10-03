import React, { useState } from 'react'

export default function Counter({setAmount, amount}) {
    
  return (
    <div>
        <div>
            {amount}
        </div>
        <button onClick={()=> setAmount(amount +1)}>+</button>
        {/* <button onClick={()=> setAmount(amount -1)}>-</button> */}
        <button onClick={() => setAmount(0)}>reset</button>
    </div>
  )
}
