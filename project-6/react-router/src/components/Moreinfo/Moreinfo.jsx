import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Moreinfo() {
    const moreInfo = useLoaderData();
    const {title, image, price,description} = moreInfo;

  return (
    <div>
        <img src={image} alt="" />
        <h1><b>Product Name:</b> {title}</h1>
        <p><b>Price:</b> {price}</p>
        <p><b>Description: </b>Description: {description}</p>
    </div>
  )
}

export default Moreinfo