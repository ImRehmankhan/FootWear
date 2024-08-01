import React from 'react'

function Navbar() {
  return (
    <header class="container-fluid">
      <div class="p-3 header container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <img src="./Assets/White-Nike-Logo-PNG.png" alt="logo" width="80" />
          </a>

          <ul
            class="nav col-12 col-lg-auto me-lg-auto ml-5 ms-lg-5 mb-2 justify-content-center mb-md-0"
          >
            <li><a href="#" class="nav-link px-2 nav-list">Home</a></li>
            <li><a href="#" class="nav-link px-2 nav-list">About</a></li>
            <li><a href="#" class="nav-link px-2 nav-list">Product</a></li>
            <li><a href="#" class="nav-link px-2 nav-list">Testimonial</a></li>
            <li><a href="#" class="nav-link px-2 nav-list">Shop</a></li>
          </ul>

          <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              class="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
          <button type="button" class="btn-style">Contact us</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar