import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';
import MyChild from './Component/MyChild';
import AppHome from './Component/AppHome';
import UseEffect from './Component/UseEffect';
import FetchDate from './Component/FetchDate';
import ShowImg from './Component/ShowImg';
import ShowCustomData from './Component/showCustomData';
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
      {/* <UseEffect/> */}
      {/* <FetchDate/> */}
      {/* <ShowImg/> */}
      <ShowCustomData/>
    </div>
  );
}

export default App