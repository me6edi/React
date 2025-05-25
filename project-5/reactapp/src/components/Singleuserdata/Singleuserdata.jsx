import React from 'react'
import './Singleuserdata.css';
const Singleuserdata = ({singleData}) => {
    const {name,phone,website,email,company} = singleData;
    console.log(singleData)

  return (
    <div className='border-2 border-red-600 p-4 bg-zinc-400'>
        <h2  className='text-4xl'>Name: {name}</h2>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
        <p>Email: {email}</p>
        <h4>Compnay: {company.name}</h4>
    </div>
    
  )
}

export default Singleuserdata