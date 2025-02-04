// src/App.js
import React from 'react';
import Carousel from './Pages/BlogWebsite/Carousel';
import Navbar from './Pages/BlogWebsite/Navbar'
import Card from './Pages/BlogWebsite/Card';
import reportWebVitals from './reportWebVitals';


function App() {
  return (
    <>
      <Navbar/>
      <Carousel/>


    <div class="container">
        <div class="row">
          <div class="col-md-4">
          <Card img="img/Img3.jpg" title="Card-title-1" p="Some quick example text to build on the card title and make up the bulk of the card's content." BtnName="Read more..."/>
          </div>
          <div class="col-md-4">
          <Card img="img/Img2.jpg" title="Card-title-2" p="Some quick example text to build on the card title and make up the bulk of the card's content." BtnName="Go Anywhare..."/>
          </div>
          <div class="col-md-4">
          <Card img="img/Img1.jpg" title="Card-title-3" p="Some quick example text to build on the card title and make up the bulk of the card's content." BtnName="Read more..."/>
          </div>
        </div>
    </div>

    </>
  );
}

export default App;
