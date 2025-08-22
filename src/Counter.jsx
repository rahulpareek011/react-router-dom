import React from 'react'
import UseCounter from './UseCounter'
import { useState } from 'react';

const Counter = () => {
    const {count,increment,decrement,reset} = UseCounter(20);
  return (
    <div>
      <h2>Counter value = {count}</h2>
      <button onClick={increment}>Increment</button> <br /> <br />
      <button onClick={decrement}>Decrement</button> <br /> <br />
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
