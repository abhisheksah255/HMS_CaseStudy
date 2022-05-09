import React from 'react'
import Slider1 from '../Image/h1.jpg';
import Slider2 from '../Image/h4.jpg';
import Slider3 from '../Image/h5.jpg';
import Slider4 from '../Image/img0.jpg';

const Slider = () => {
  return (
    <div>

      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={Slider1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h2 className="display-2 text-light">Welcome to</h2>
        <h3  className="display-1 text-light">Hotel Paradise</h3>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Slider2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2 className="display-2 text-light">Welcome to</h2>
        <h3  className="display-1 text-light">Hotel Paradise</h3>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={Slider3}  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2 className="display-2 text-light">Welcome to</h2>
        <h3  className="display-1 text-light">Hotel Paradise</h3>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={Slider4}  class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <h2 className="display-2 text-light">Welcome to</h2>
        <h3  className="display-1 text-light">Hotel Paradise</h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )
}

export default Slider
