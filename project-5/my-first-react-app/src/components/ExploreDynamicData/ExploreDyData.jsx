import React from 'react'

function ExploreDyData(props) {

  console.log(props)

  const exploreStyle = {
    border: '2px solid red',
    padding: '50px 100px',
    backgroundColor: 'aqua',
    margin: '30px'
  }

  return (
    <div style={exploreStyle}>
      <h2>ExploreDyData</h2>
      <h2>Name: {props.name}</h2>
      <p>Name: {props.age}</p>
      <span>Profession: {props.profession}</span>
      </div>
  )
}

export default ExploreDyData