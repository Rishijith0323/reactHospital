import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/medical-health-care-center-logo%2C-medical-logo-design-template-8db2a01045642e13bd8cf9ea2adcbf2b_screen.jpg?ts=1660643350" alt="Bootstrap" width="250" height="244"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Aboutus">About US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Contact US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Service">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="faq">FAQ</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
