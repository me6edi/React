import React from 'react'
import { Link } from 'react-router-dom';

function Product({product}) {
   const {category,price,description,image} = product;
  return (
    <div className='border-2 border-red-500'>
        <h1>{category}</h1>
        <h1>{price}</h1>
        <h1>{description}</h1>
        {/* <img src={image} alt="" /> */}
        <Link to = {`/product/${product.id}`}>

            <button className='bg-red-700 my-5 px-4'>More Info...</button>

        </Link>
    </div>
  )
}

export default Product 