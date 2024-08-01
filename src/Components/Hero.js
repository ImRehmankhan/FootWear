import React from 'react'

function Hero() {
  return (
    <section class="container-fluid hero">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5  align-items-center">
      <div class="col-lg-6 p-3 p-lg-5  pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-light">
          SUMMER STEP COLLECTIONS
          <span style={{"color" : "rgb(255, 102, 0)"}}>2022</span>
        </h1>
        <p class="lead text-light">
          <font  style={{"vertical-align" : "inherit"}}
            ><font style={{"vertical-align" : "inherit"}}
              >We've been offering the best level of comfort,style and
              attention to detail for years</font
            ></font
          >
        </p>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
          <button
            type="button"
            class="btn  btn-style"
          >
            Shop Now
          </button>
        </div>
      </div>
      <div
        class="col-lg-4 d-flex img-size align-items-center justify-content-center"
      >
        <img class="" src="./Assets/shoe1.png" alt=" img" />
      </div>
    </div>
  </section>
  )
}

export default Hero