import React from 'react';
import './App.css';
import Input from './Input';
import ControlledComponent from './ControlledComponent';
import Expressions from './Expressions';

function App() {
  return (
      <React.Fragment>
      {/* <ReactBootstrap/> */}
      
      <Input/>
      <Expressions/>
      <ControlledComponent/>
      </React.Fragment>
  );
}

export default App;
