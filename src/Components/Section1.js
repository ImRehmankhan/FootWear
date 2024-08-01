import React from 'react'

function Section1() {
  return (
    <section class="container-fluid hero">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
          <div
            class="col-lg-5 d-flex img-size align-items-center justify-content-center">
            <img class="" src="./Assets/shoe3.png" alt=" img" />
          </div>
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1 text-light">
              WE PROVIDE HIGH QUALITY 
              <span  style={{"color" : "rgb(255, 102, 0)"}}>FOOTWARE</span>
            </h1>
            <p class="lead text-light">
              <font  style={{"vertical-align" : "inherit"}}
                ><font style={{"vertical-align" : "inherit","line-height": 12+"px"}}
                  >Driven by the desire to create a product that gives your feet an incredible experience. and to provide that sensation for every event in your life. Every Step is a Comfort</font
                ></font
              >
            </p>
            <div
              class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
            >
              <button
                type="button"
                class="  btn-style"
              >
                Explore more
              </button>
            </div>
          </div>
          
        </div>
      </section>
  )
}

export default Section1