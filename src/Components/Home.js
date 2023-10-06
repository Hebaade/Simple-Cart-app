import React from 'react'

export default function Home() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide ">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img1.jpg" className="d-block w-100" alt="..." style={{height:"600px",objectFit:"cover"}}/>
    </div>
    <div className="carousel-item">
      <img src="img2.jpg" className="d-block w-100" alt="..." style={{height:"600px"}}/>
    </div>
    <div className="carousel-item">
      <img src="img3.jpg" className="d-block w-100" alt="..." style={{height:"600px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
