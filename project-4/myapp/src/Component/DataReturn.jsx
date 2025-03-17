import React from 'react'

function DataReturn(props) {
  return (
    <div style={{border:"2px solid red",margin:"20px", padding:"20px"}}>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.id}</p>
    </div>
  )
}

export default DataReturn