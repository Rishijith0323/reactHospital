import React from 'react'

const Book = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">
                <label htmlFor="" className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">
                <label htmlFor="" className="form-label">Mob no:</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">
                <label htmlFor="" className="form-label">Adress</label>
                <textarea name="" id="" className="form-control"></textarea>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">
                <label htmlFor="" className="form-label">image</label>
                <input type="file" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                <label htmlFor="" className="form-label">Doctor</label>
                <select name="" id="" className="form-select">
                  <option value="Select Doctor">Select Doctor</option>
                  <option value="R Krishna Kumar">R Krishna Kumar</option>
                  <option value="Anil Mathew">Anil Mathew</option>
                  <option value="Anju R">Anju R</option>
                  <option value="Ajit T">Ajit T</option>
                </select>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6">
                <label htmlFor="" className="form-label">Date Of Birth</label>
                <input type="date" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">
                <label htmlFor="" className="form-label">Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">
                 <label htmlFor="" className="form-label">Password</label>
                 <input type="password" name="" id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12">
                <button className="btn btn-success">Register</button>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Book
