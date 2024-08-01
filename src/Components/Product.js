import React from 'react'

function Product() {
  return (
    <section class="container-fluid card-section mt-5">
        <h1 style={{"text-align" : "center"}}>
          POPULAR <span  style={{"color" : " rgb(255, 102, 0)"}}>PRODUCTS </span>
        </h1>
        <div class="row d-flex align-items-center justify-content-center">
          <div class="card card-bg col-lg-3 col-sm-12 col-md-5 card-mr">
            <div class="bg-info rounded-4">
              <img src="./Assets/shoe11.png" class="card-img-top" alt="..." />
            </div>

            <div class="card-body">
              <h5 class="card-title">Nike ZoomX Streakfly</h5>
              <p class="card-text">$193.39</p>
              <a href="#" class="btn btn-style">view details</a>
            </div>
          </div>
          <div class="card card-bg col-lg-3 col-sm-12 col-md-5 card-mr">
            <div class="bg-warning rounded-4">
              <img src="./Assets/shoe22.png" class="card-img-top" alt="..." />
            </div>

            <div class="card-body">
              <h5 class="card-title">Nike ZoomX Streakfly</h5>
              <p class="card-text">$193.39</p>
              <a href="#" class="btn btn-style">view details</a>
            </div>
          </div>
          <div class="card card-bg col-lg-3 col-sm-12 col-md-5 card-mr">
            <div class="bg-danger rounded-4">
              <img src="./Assets/shoe33.png" class="card-img-top" alt="..." />
            </div>

            <div class="card-body">
              <h5 class="card-title">Nike ZoomX Streakfly</h5>
              <p class="card-text">$193.39</p>
              <a href="#" class="btn btn-style">view details</a>
            </div>
          </div>

          <div class="card card-bg col-lg-3 col-sm-12 col-md-5 card-mr">
            <div class="bg-info rounded-4">
              <img src="./Assets/shoe11.png" class="card-img-top" alt="..." />
            </div>

            <div class="card-body">
              <h5 class="card-title">Nike ZoomX Streakfly</h5>
              <p class="card-text">$193.39</p>
              <a href="#" class="btn btn-style">view details</a>
            </div>
          </div>
          <div class="card card-bg col-lg-3 col-sm-12 col-md-5 card-mr">
            <div class="bg-warning rounded-4">
              <img src="./Assets/shoe22.png" class="card-img-top" alt="..." />
            </div>

            <div class="card-body">
              <h5 class="card-title">Nike ZoomX Streakfly</h5>
              <p class="card-text">$193.39</p>
              <a href="#" class="btn btn-style">view details</a>
            </div>
          </div>
          <div class="card card-bg col-lg-3 col-sm-12 col-md-5 card-mr">
            <div class="bg-danger rounded-4">
              <img src="./Assets/shoe33.png" class="card-img-top" alt="..." />
            </div>

            <div class="card-body">
              <h5 class="card-title">Nike ZoomX Streakfly</h5>
              <p class="card-text">$193.39</p>
              <a href="#" class="btn btn-style">view details</a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Product