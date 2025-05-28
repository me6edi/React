import { useState } from 'react';
import './App.css';
import Placement from './components/Placement/Placement';
import Products from './components/Products/Products';
import SingleCartData from './components/SingleCartData.jsx/SingleCartData';



function App() {
    const [cart, setCart] = useState([]);

    const addToCartData = (Product) => {
      const newCart = [...cart, Product];
      setCart(newCart);
    }
      

  return (
    <div className='flex gap-x-6'>
        <Products addToCartData = {addToCartData}/>
        <Placement cart = {cart}/>
    </div>
  );
}

export default App;
 