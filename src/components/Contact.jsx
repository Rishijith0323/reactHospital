import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="text-center"><h1>Contact US</h1></div>
        <div className="row">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">phone no</label>
                <input type=" " className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Address</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Messsage</label>
                <textarea name="" id="" className="form-control"></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">Submitt</button>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

            <ul class="list-group list-group-flush">
              <li class="list-group-item"><h2>Whether you are here, everywhere.</h2></li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Emergency</div>
                  0484 668 1234,0484 285 1234
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">International Clients</div>
                  +91 484 668 1234,+91 484 285 1234 or
                internationalmarketing@aims.amrita.edu
                </div>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                  <div class="fw-bold">Appointment</div>
                  0484 6682100,0484 2852100 or
                appointments@aims.amrita.edu
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
