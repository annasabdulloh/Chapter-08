import React from 'react'
import './FAQ.css'

const Faq = () => {
  return (
    <div className="container faq">
      <a name='faq'> </a>
        <div className="row mt-5" >
          <div className="col-md-6 col-sm-12">
            <h4 className="fw-bold">Frequently Asked Question</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <div className="accordion" id="accordionFlushExample">
              <div className=" accordion-item border mb-3">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa quo, deleniti ipsa totam quam quos, adipisci sapiente velit tempore nesciunt illo, unde mollitia ab nihil illum quae. Dicta, temporibus eius. Laudantium, perspiciatis voluptates dicta veniam eius et tenetur tempore at laborum officiis corrupti reiciendis dolorem, beatae nulla! Est, sapiente!</div>
                </div>
              </div>
              <div className="accordion-item border mb-3">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa quo, deleniti ipsa totam quam quos, adipisci sapiente velit tempore nesciunt illo, unde mollitia ab nihil illum quae. Dicta, temporibus eius. Laudantium, perspiciatis voluptates dicta veniam eius et tenetur tempore at laborum officiis corrupti reiciendis dolorem, beatae nulla! Est, sapiente!</div>
                </div>
              </div>
              <div className="accordion-item border mb-3">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
                    assumenda! Enim molestias porro exercitationem? Fuga, laboriosam vero sunt blanditiis eius
                    laudantium. Non debitis officiis eveniet dolorem dolorum beatae delectus consectetur!</div>
                </div>
              </div>
              <div className="accordion-item border mb-3">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Apakah ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa quo, deleniti ipsa totam quam quos, adipisci sapiente velit tempore nesciunt illo, unde mollitia ab nihil illum quae. Dicta, temporibus eius. Laudantium, perspiciatis voluptates dicta veniam eius et tenetur tempore at laborum officiis corrupti reiciendis dolorem, beatae nulla! Est, sapiente!</div>
                </div>
              </div>
              <div className="accordion-item border mb-3">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa quo, deleniti ipsa totam quam quos, adipisci sapiente velit tempore nesciunt illo, unde mollitia ab nihil illum quae. Dicta, temporibus eius. Laudantium, perspiciatis voluptates dicta veniam eius et tenetur tempore at laborum officiis corrupti reiciendis dolorem, beatae nulla! Est, sapiente!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Faq
