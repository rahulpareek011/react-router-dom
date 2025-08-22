import React from 'react'
import { useState } from 'react';

const UseCounter = (initialValue = 0) => {
    const [count,setCount] = useState(initialValue);
    const increment = () => setCount(count+1);
    const decrement = () => setCount(count-1);
    const reset = () => setCount(initialValue);

    return {count,increment,decrement,reset}

  return (
    <div>
      
    </div>
  )
}

export default UseCounter
