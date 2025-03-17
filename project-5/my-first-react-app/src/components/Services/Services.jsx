import React from 'react'
import './Services.css'



function Services() {

  function adding(num){
      console.log(num *2);
  }

  // function update(){
  //    const serviceCompo =  document.getElementById('service-compo')
  //    serviceCompo.innerText = 'Hello I am Next compo';
  // }
  
  return (
<div>
<h1 id="service-compo">Services compo...</h1>
<button onClick={() => adding(5)} className='click-btn'>Click Me</button>
</div>
  )
}

export default Services