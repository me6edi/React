import React, { useState } from 'react'

const App =() => {
  const [Name, SetName] =  useState("Mehedi Amin");
    const ChangeName = ()=>{
      SetName("Mehedi");
    }
  return (
    <div>
      <h1>Hello World! {Name}</h1>
      <button onClick={ChangeName}>Click Me</button>
    </div>
  );
}

export default App