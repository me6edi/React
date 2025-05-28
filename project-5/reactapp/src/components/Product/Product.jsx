import React from 'react'

function Product({product,addToCartData}) {
  const {name, age, profession} = product;


  return (
    <div className='border-2 border-red-800'>
        <h1 className='text-2xl'>{name}</h1>
        <p>{age}</p>
        <p>{profession}</p>
        <button onClick={() => addToCartData(product)} className='bg-green-500 py-2 px-4'>
  Add to Cart
</button>

    </div>
  )
}

export default Product