import React, { useState } from 'react'

export default function Counter({setAmount, amount, items}) {




    class item {
        constructor(amount){
            this.amount = amount;
        }
    }

    const handleClick = () => {
        setAmount(amount + 1)
        items.push(amount + 1)
        console.log(items)
    }



  return (
    <div>
        <div>
            {amount}
        </div>
        <button onClick={handleClick}>+</button>
        {/* <button onClick={()=> setAmount(amount -1)}>-</button> */}
        <button onClick={() => setAmount(0)}>reset</button>
    </div>
  )
}
