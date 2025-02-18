import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import MyChild from './Component/MyChild';
import AppHome from './Component/AppHome';
const App =() => {
  const Parentdata = "I Am Your Father";
  const DataPassing = (para)=>{
    console.log(para)
  }
  return (
    <div>
      {/* <Form/> */}
      {/* <MyChild Title={Parentdata} onMathod={DataPassing}/> */}
      <AppHome/>
    </div>
  );
}

export default App