import React from 'react'
import "./BlogCSS/Blog.css"
function Carousel() {
  return (
<div>
<div id="carouselExampleFade" class="carousel slide carousel-fade container mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="row">
        <div className="col-md-6">
        <img src="img/img1.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div className="col-md-6">
          <p className='ShortTitle'>Lorem ipsum dolor sit amet.</p>
          <h3 className='LongTitle'>Live With Mehedi Amin</h3>
          <p className='ShortTitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, nostrum totam, error veritatis nesciunt, officiis accusantium corporis rerum non repellendus aliquid fugiat quaerat cupiditate fugit corrupti dolore! Voluptatem a delectus vel totam non voluptas cum. Voluptates est itaque assumenda nihil delectus nulla sunt, voluptas nostrum. Corporis at minus est natus.</p>
          <p className='ChannelName'>Mehedi Amin</p>
          <p className='ShortTitle'>27 Jan 2025</p>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Carousel