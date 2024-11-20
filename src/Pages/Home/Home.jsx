import "./Home.css";

export function Home() {
  return (
    <>
      <section className="home-container">
        <section className="hero text-center text-white d-flex align-items-center justify-content-center">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <h1 className="display-4">
                  Gaya Unik, Harga Asik. Tampil Keren Tanpa Beban di Kantong!
                </h1>
                <p className="lead mt-3 mb-4">
                  Jelajahi gaya baru dan temukan pilihan fashion yang membuatmu
                  tampil menarik dan percaya diri, semua tanpa menguras kantong!
                  Temukan harta karun fashion yang pas untuk setiap momen dalam
                  hidupmu.
                </p>
                <a href="halaman_KPK.html" className="btn btn-primary btn-lg">
                  Jelajahi
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="flash-sale-section py-5 mt-5">
          <div className="container display-flex justify-content-between align-items-center">
            <h2 className="section-title">Flash Sale</h2>
            <div
              className="countdown-timer mb-4"
              style={{ marginRight: "auto", marginLeft: "20px" }}
            >
              <span id="hari" className="timer-box">
                00
              </span>
              <span id="jam" className="timer-box">
                00
              </span>
              <span id="menit" className="timer-box">
                00
              </span>
            </div>
            <a href="halaman_flashsale.html" className="btn-custom">
              Lihat Semua
            </a>
          </div>
          <div className="row justify-content-center">
            <div className="col-5 col-md-2">
              <div
                className="card text-white border-0"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              >
                <img
                  src="/assets/images/celana1.jpg"
                  alt="Jeans Levi's 501 Vintage"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <span className="badge-top">Tersisa 1</span>
                  <h5 className="card-title mt-3">Jeans Levi's 501 Vintage</h5>
                  <p className="card-text">
                    <del>Rp 200.000</del> <strong>Rp 100.000</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-2">
              <div
                className="card text-white border-0"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              >
                <img
                  src="/assets/images/Flanel Ralph Lauren2.jpg"
                  alt="Flanel Ralph Lauren2"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <span className="badge-top">Tersisa 1</span>
                  <h5 className="card-title mt-3">Flanel Ralph Lauren</h5>
                  <p className="card-text">
                    <del>Rp 100.000</del> <strong>Rp 50.000</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-2">
              <div
                className="card text-white border-0"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              >
                <img
                  src="/assets/images/Denim Wrangler 80s.jpg"
                  alt="Denim Wrangler 80s"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <span className="badge-top">Tersisa 1</span>
                  <h5 className="card-title mt-3">Denim Wrangler 80s</h5>
                  <p className="card-text">
                    <del>Rp 300.000</del> <strong>Rp 150.000</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-5 col-md-2">
              <div
                className="card text-white border-0"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              >
                <img
                  src="/assets/images/Tas Coach Signature.jpg"
                  alt="Tas Coach Signature"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <span className="badge-top">Tersisa 1</span>
                  <h5 className="card-title mt-3">Tas Coach Signature</h5>
                  <p className="card-text">
                    <del>Rp 200.000</del> <strong>Rp 50.000</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="kategori-section py-5">
          <div className="container text-center">
            <h2 className="section-title">Lihat Berbagai Kategori Kami</h2>
            <p className="section-description mb-5">
              Jelajahi koleksi kami yang beragam! Temukan pilihan pakaian yang
              cocok untuk gaya dan kebutuhanmu.
            </p>
            <div className="row justify-content-center">
              <div className="col-6 col-md-3">
                <a href="halaman_AP.html" className="text-decoration-none">
                  <div className="kategori-card">
                    <img
                      src="/assets/images/pakaian pria.jpg"
                      alt="Pakaian Pria"
                      className="kategori-image"
                    />
                    <div className="kategori-overlay">
                      <p>Pakaian Pria</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-6 col-md-3 d-flex flex-column kategori-dual ">
                <a
                  href="halaman_AW.html"
                  className="text-decoration-none kategori-link"
                >
                  <div className="kategori-card mb-2">
                    <img
                      src="/assets/images/pakaian wanita.jpg"
                      alt="Pakaian Wanita"
                      className="kategori-image"
                    />
                    <div className="kategori-overlay">
                      <p>Pakaian Wanita</p>
                    </div>
                  </div>
                </a>
                <a
                  href="halaman_KA.html"
                  className="text-decoration-none kategori-link"
                >
                  <div className="kategori-card mt-2">
                    <img
                      src="/assets/images/aksesoris.jpg"
                      alt="Aksesoris"
                      className="kategori-image"
                    />
                    <div className="kategori-overlay">
                      <p>Aksesoris</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-6 col-md-3">
                <a
                  href="halaman_flashsale.html"
                  className="text-decoration-none"
                >
                  <div className="kategori-card">
                    <img
                      src="/assets/images/sepatu.jpg"
                      alt="Aksesoris"
                      className="kategori-image"
                    />
                    <div className="kategori-overlay">
                      <p>Flash Sale</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="produk-section py-5">
          <div className="container text-center">
            <h2 className="section-title-produk">Rekomendasi Produk Terbaik</h2>
            <p className="section-description">
              Temukan fashion pakaian yang paling dicari! Setiap item menawarkan
              gaya dan kualitas unggul dengan harga terjangkau.
            </p>
            <a href="halaman_KPK.html" className="btn-lihat-semua">
              Lihat Semua
            </a>

            <div className="container mt-5">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex overflow-auto produk-scroll">
                    <div className="produk-card">
                      <img
                        src="/assets/images/Nike Air Max Limited.jpg"
                        alt="Nike Air Max Limited"
                        className="produk-image"
                      />
                    </div>
                    <div className="produk-card">
                      <img
                        src="/assets/images/Polo Lacoste Original.jpg"
                        alt="Polo Lacoste Original"
                        className="produk-image"
                      />
                    </div>
                    <div className="produk-card">
                      <img
                        src="/assets/images/Vans Checkerboard Classic.jpg"
                        alt="Vans Checkerboard Classic"
                        className="produk-image"
                      />
                    </div>
                    <div className="produk-card">
                      <img
                        src="/assets/images/Blazer Gucci Vintage.jpg"
                        alt="Blazer Gucci Vintage"
                        className="produk-image"
                      />
                    </div>
                    <div className="produk-card me-3">
                      <img
                        src="/assets/images/Jaket Kulit Harley Davidson.jpg"
                        alt="Jaket Kulit Harley Davidson"
                        className="produk-image"
                      />
                    </div>
                    <div className="produk-card me-3">
                      <img
                        src="/assets/images/Denim Wrangler 80s.jpg"
                        alt="Denim Wrangler 80s"
                        className="produk-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="outfit-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 d-flex flex-column flex-md-row">
                <div className="outfit-card flex-grow-1">
                  <img
                    src="assets/images/idol.jpg"
                    className="img-fluid rounded"
                    alt="Outfit Image"
                  />
                </div>
                <div className="small-cards d-flex flex-column justify-content-start ms-3 mt-3 mt-md-0">
                  <div className="p-1">
                    <img
                      src="assets/images/baret abu.jpg"
                      className="img-fluid rounded"
                      alt="Item 1"
                    />
                  </div>
                  <div className="p-1">
                    <img
                      src="assets/images/kemeja putih.jpg"
                      className="img-fluid rounded"
                      alt="Item 1"
                    />
                  </div>
                  <div className="p-1">
                    <img
                      src="assets/images/rok kotak.jpg"
                      className="img-fluid rounded"
                      alt="Item 1"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column align-items-center align-items-md-start mt-4 mt-md-0">
                <h2 className="section-title-outfit">
                  Outfit Hits seperti Idol Favorit
                </h2>
                <p className="section-description-outfit">
                  Inspirasi gaya dari idol favoritmu! Pilihan outfit kekinian
                  ala selebriti, mulai dari streetwear hingga casual chic, cocok
                  untuk tampil stylish tanpa harus mahal!
                </p>
                <div className="outfit-buttons d-flex justify-content-center mt-3 w-100">
                  <a href="halaman_AW.html" className="text-decoration-none">
                    <button className="btn btn-outline-light mx-2">
                      Atasan
                    </button>
                  </a>
                  <a href="halaman_BW.html" className="text-decoration-none">
                    <button className="btn btn-outline-light mx-2">
                      Bawahan
                    </button>
                  </a>
                  <a href="halaman_KA.html" className="text-decoration-none">
                    <button className="btn btn-outline-light mx-2">
                      Aksesoris
                    </button>
                  </a>
                </div>
                <a href="#" className="text-decoration-none">
                  <button className="btn btn-primary btn-wish mt-4">
                    Masukkan Keranjang
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
