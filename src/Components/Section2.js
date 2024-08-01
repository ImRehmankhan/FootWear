import React from 'react'

function Section2() {
  return (
    <section class="container-fluid " style={{"min-height" :90+"vh"}}>
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
      <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
        <h3 style={{"color" :"rgb(255, 102, 0)"}}>Product Details</h3>
        <h1 class="display-4 fw-bold lh-1 text-dark">
          KNOW ABOUT YOUR MAIN PRODUCT
          <span  style={{"color" :"rgb(255, 102, 0)"}}>2022</span>
        </h1>
        <p class="lead text-dark">
          <font style={{"vertical-align" :"inherit"}}
            ><font style={{"vertical-align" :"inherit"}}
              >Nike is a leading manufacturer of sports-related products,including shoes,apparel and equipment.</font
            ></font
          >
        </p>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
        <div class="row">
          <div class="col-12 d-flex align-items-center  justify-content-start">
            <img src="./Assets/icon1.png" alt="" width="50"/>
            <div class="text">
              <h5  style={{"font-weight" :900}}>Best Quality Shoes</h5>
              <p>featuring the latest technologies to up your performance</p>
            </div>
          </div>
          <div class="col-12 d-flex align-items-center  justify-content-start">
            <img src="./Assets/icon2.png" alt="" width="50"/>
            <div class="text">
              <h5 style={{"font-weight" :900}}>Best Quality Shoes</h5>
              <p>featuring the latest technologies to up your performance</p>
            </div>
          </div>
        </div>
         

        </div>
      </div>
      <div
        class="col-lg-5 d-flex img-size align-items-center justify-content-center"
      >
        <img class="" src="./Assets/shoe33.png" alt=" img" />
    
      </div>
    </div>
  </section>
  )
}

export default Section2