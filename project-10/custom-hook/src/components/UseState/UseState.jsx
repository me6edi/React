import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(25);



  return (
    <div>
        <h1> {count} </h1>

        <button onClick={() => setCount(count + 1)}> Increment </button>
        <button onClick={() => setCount(count - 1)}> Decrement </button>
    </div>
  )
}

export default UseState