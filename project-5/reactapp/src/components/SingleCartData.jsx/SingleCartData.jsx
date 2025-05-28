import React from 'react'

const SingleCartData = ({singleData}) => {

    const {name,age,profession} = singleData;

    console.log(singleData)
  return (
    <div>
        <hr />
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{profession}</h1>
        <hr />
    </div>
  )
}

export default SingleCartData