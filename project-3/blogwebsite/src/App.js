// src/App.js
import React from 'react';
import Home from "./Home.jsx";
import "./App.css";
import About from './Pages/About.jsx';
import Blog from './Pages/Blog.jsx';
import Sponsor from './Pages/Sponsor.jsx';
import Contact from './Pages/Contact.jsx';
import Error from './Pages/Error.jsx';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/Sponsor' element={<Sponsor/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;


