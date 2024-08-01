import React from 'react'

function Footer() {
  return (
    
    <div class="container-fluid hero text-light"  style={{"min-height" :30+ "vh"}}>
    <footer class="py-5">
      <div class="row m-5">
        <div class="col-6 col-md-2">
          <h5>Get Help</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li ">About us</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li">Contact us</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li">Return Policy</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li">Privacy Policy</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li">Payment Policy</a></li>
          </ul>
        </div>
  
        <div class="col-6 col-md-2 ">
          <h5>About Us</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2 "><a href="#" class="nav-link footer-li p-0 footer-li">News</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li">Services</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li">Our Policy</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li">Customer Care</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li">FAQ's</a></li>
          </ul>
        </div>
  
        <div class="col-6 col-md-2 mb-3">
          <h5>Contact us</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li">rehman@gmail.com</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 footer-li">+92-3425221820</a></li>
          </ul>
        </div>
  
        <div class="col-md-5 offset-md-1 ">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
              <button class="btn-style" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
  
      <div class="d-flex flex-lg-row flex-sm-row justify-content-center border-top">
        <p>© 2024 Nike, Inc. All rights reserved.</p>
      </div>
    </footer>
  </div>
  )
}

export default Footer