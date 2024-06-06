import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://www.narayanahealth.org/_next/image?url=https%3A%2F%2Fstgaccinwbsdevlrs01.blob.core.windows.net%2Fnewcorporatewbsite%2Fhomepage-banners%2FJanuary2024%2FCCeVjCKszDYpK1Zw5MPj.webp&w=1920&q=75" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://www.narayanahealth.org/_next/image?url=https%3A%2F%2Fstgaccinwbsdevlrs01.blob.core.windows.net%2Fnewcorporatewbsite%2Fhomepage-banners%2FFebruary2024%2FmO4bFBgEvAPYWRYgJDsR.webp&w=1920&q=75" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://www.narayanahealth.org/_next/image?url=https%3A%2F%2Fstgaccinwbsdevlrs01.blob.core.windows.net%2Fnewcorporatewbsite%2Fhomepage-banners%2FJanuary2024%2FVN8DnbFlModceGUJm44g.webp&w=1920&q=75" class="d-block w-100" alt="..." />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <br />
        <div class="card text-center">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="true" href="#">Find Specialties & doctors</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Book">Book Appointment</a>
              </li>
            </ul>
          </div>
          <div class="card-body" style={{ backgroundColor: "lightblue" }}>
            <h5 class="card-title">Special title treatment</h5>
            <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Specialties</label>
                <select name="" id="" className="form-select">
                  <option value="Select option">Select option</option>
                  <option value="ENT">ENT</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Opthalmology">Opthakmology</option>
                </select>
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Doctors</label>
                <select name="" id="" className="form-select">
                  <option value="Select Doctor">Select Doctor</option>
                  <option value="R Krishna Kumar">R Krishna Kumar</option>
                  <option value="Anil Mathew">Anil Mathew</option>
                  <option value="Anju R">Anju R</option>
                  <option value="Ajit T">Ajit T</option>
                </select>
              </div>
            </div>

          </div>
        </div>
        <br />
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h1>Our team of experts provides top-notch medical treatment with empathy using the most advanced technology.
            </h1>
          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <p class="lead">
              Your health is our priority. Amrita Hospital ensures you and your family receive the best possible medical care and assistance. We strive to create a warm and safe healing environment for you and your family. Over the past decade, Amrita has been unflinchingly devoted to improving healthcare and treatment. Medical specialists have been working diligently to conduct research and educate future generations of doctors and healthcare workers.

              As our entire team works toward your speedy recovery, we utilize highly-trained doctors and cutting-edge technology in the field of medical sciences.
            </p>

          </div>
        </div>
        <br />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card">
              <div class="card-body" style={{ backgroundColor: "lightgray" }}>
                <h1>Our Departments & Centers</h1>
                <div className="row g-3">
                  <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src="https://wexnermedical.osu.edu/-/media/images/wexnermedical/pages/departments/national-reputation-campaign/stories/rheumatology/joints.jpg?la=en&hash=80D82C80EE091FDC14734FBC51CE7BB3" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h2>Rheumatology and Clinical Immunology</h2>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src="https://t3.ftcdn.net/jpg/01/19/75/26/360_F_119752602_gm4OfWfuBRw8rOKaXqMgSSjNPjgyhNPE.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h1>Opthamology</h1>
                        <p class="lead">

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card">
                      <img src="https://www.rumcsi.org/wp-content/uploads/2020/09/Radiology-scaled.jpg" class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h2>Radiolgy</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="card-group">
              <div class="card">
                <img src="https://5.imimg.com/data5/HD/TL/MY-9774740/iso-consulting-services-250x250.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">  ISO</h5>
                  <p class="card-text">

                    The ISO standards provide a guarantee of quality across boundaries and geographies. Amrita Hospital in Kochi is accredited with ISO 9001:2015 standards. ISO 9001:2015 is a standard for quality management systems that emphasizes customer satisfaction, continuous improvement, and regulatory compliance. By following these requirements, organizations can strive to improve the safety and quality of care they provide, and consistently meet the expectations of both customers and regulatory bodies.</p>
                  <p class="card-text"><small class="text-body-secondary"></small></p>
                </div>
              </div>
              <div class="card">
                <img src="https://play-lh.googleusercontent.com/Io-a7XqtlEHOwJNmHhSuoJFgFs3qA5wPhk7cX2ogJ2410sc80qWNeZfE30l1_EY_Auo=w240-h480-rw" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">NABL</h5>
                  <p class="card-text">
                    The National Accreditation Board for Testing and Calibration Laboratories (NABL) is a board that operates under the Quality Council of India. It is responsible for providing accreditation to testing and calibration laboratories in India, and for promoting the quality of testing and calibration services in the country. By achieving NABL accreditation, our laboratory has demonstrated its ability to perform accurate and reliable tests and measurements, and to ensure that its results are traceable to national or international standards. NABL accreditation also indicates that the laboratory has implemented a quality management system that adheres to international standards and best practices.</p>
                  <p class="card-text"><small class="text-body-secondary"></small></p>
                </div>
              </div>
              <div class="card">
                <img src= "data:image/png;base64,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" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">NACC</h5>
                  <p class="card-text">Amrita Hospital the university teaching hospital of Amrita Vishwa Vidyapeetham. The university has been accredited (Cycle-3) with an A++, the highest grade, by the National Assessment and Accreditation Council (NAAC), an autonomous body established in 1994 by the University Grants Commission (UGC) of India to assess and accredit institutions of higher education in the country and headquartered in Bengaluru.</p>
                  <p class="card-text"><small class="text-body-secondary"></small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
