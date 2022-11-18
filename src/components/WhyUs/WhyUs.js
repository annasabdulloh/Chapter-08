import React from 'react'

const WhyUs = () => {
  return (
    <div className="container my-5"> 
      <a name="why-us"> </a>
      <h2 className="font-weight-normal caption-normal my-3">Why Us?</h2>
      <p className="my-4">Mengapa harus pilih Binar Car Rental?</p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div className="col mb-3 mb-lg-0">
          <div className="card">
            <div className="card-body">
              <img src="./assets/icon_thumbs-up.svg" className="img-fluid mb-3" alt="thumbs-up" />
              <p className="fw-bold mb-3 fs-16">Mobil Lengkap</p>
              <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </div>
        </div>
        <div className="col mb-3 mb-lg-0">
          <div className="card">
            <div className="card-body">
              <img src="./assets/icon_price.svg" className="img-fluid mb-3" alt="icon_price" />
              <p className="fw-bold mb-3 fs-16">Harga Murah</p>
              <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
          </div>
        </div>
        <div className="col mb-3 mb-md-0">
          <div className="card h-100">
            <div className="card-body">
              <img src="./assets/icon_24hrs.svg" className="img-fluid mb-3" alt="icon_24hrs" />
              <p className="fw-bold mb-3 fs-16">Layanan 24 Jam</p>
              <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
          </div>
        </div>
        <div className="col mb-3 mb-md-0">
          <div className="card h-100">
            <div className="card-body">
              <img src="./assets/icon_professional.svg" className="img-fluid mb-3" alt="icon_professional" />
              <p className="fw-bold mb-3 fs-16">Sopir Profesional</p>
              <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs
