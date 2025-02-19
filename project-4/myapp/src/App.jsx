import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import MyChild from './Component/MyChild';
import AppHome from './Component/AppHome';
import UseEffect from './Component/UseEffect';
const App =() => {
  const Parentdata = "I Am Your Father";
  const DataPassing = (para)=>{
    console.log(para)
  }
  return (
    <div>
      {/* <Form/> */}
      {/* <MyChild Title={Parentdata} onMathod={DataPassing}/> */}
      {/* <AppHome/> */}
      <UseEffect/>
    </div>
  );
}

export default App