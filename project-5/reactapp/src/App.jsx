import { useState } from 'react';
import './App.css'

function App() {

      const [price, setPrice] = useState(20);
      const increaseHandle = () => {
         const newPrice = price + 1;
         setPrice(newPrice);
      }

      const decreaseHandle = () => {
        const newPrice = price - 1;
        setPrice(newPrice);
     }


  return (
    <div>
          <h1> Price: {price}</h1>
          <button onClick={increaseHandle}> Increase </button> &nbsp; &nbsp; &nbsp;
          <button onClick={decreaseHandle}> Decrease </button>
          <h2> Price: {price} </h2>
          <p> Price: {price} </p>
          <h4> Price: {price} </h4>
    </div>
  )
}

export default App
