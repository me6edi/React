import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from '../Product/Product';

function Products() {
const products = useLoaderData();
console.log(products)
  return (
    <div className='grid grid-cols-3 gap-6'>

      {
        products.map(product => <Product
        key={product.id}
        product={product}
        
        ></Product>)
      }
    </div>
  )
}

export default Products