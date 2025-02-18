import React from 'react'

const MyChild = (props) => {
props.onMathod("Hello My Parent")
  return (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptates officiis accusamus, ratione ea, delectus architecto vel natus non id cupiditate numquam sed illo? Cum repellendus deleniti voluptatum commodi accusantium.</p>
        <p>{props.Title}</p>
    </div>
  )
}

export default MyChild