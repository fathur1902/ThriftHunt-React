// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TambahP.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faBox, faArrowLeft, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";

export function TambahP() {
  // Fungsi untuk menangani perubahan halaman (dapat disesuaikan nanti untuk routing)
  const changePage = (pageUrl) => {
    window.location.href = pageUrl;
  };

  return (
    <div className="bg-light d-flex">
      {/* Sidebar */}
      <div className="sidebar p-4">
        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-secondary rounded-circle me-3"
            style={{ width: "40px", height: "40px" }}
          ></div>
          <h1 className="fs-4 fw-bold">Thrift Hunt</h1>
        </div>
        <button className="btn btn-light mb-3" onClick={() => changePage("edit-produk.html")}>
          <FontAwesomeIcon icon={faEdit} className="me-2" />
          Edit Produk
        </button>
        <button className="btn btn-gradient mb-3" onClick={() => changePage("lihat-pesanan.html")}>
          <FontAwesomeIcon icon={faBox} className="me-2" />
          Lihat Pesanan
        </button>
        <button className="btn btn-gradient" onClick={() => changePage("home.html")}>
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Home
        </button>
      </div>

      {/* Content Area */}
      <div className="content flex-grow-1">
        <div className="header">
          <input className="form-control search-bar" placeholder="Mencari..." type="text" />
          <div className="user-info">
            <span>Admin Thrift Hunt</span>
            <img
              alt="User Image"
              src="https://storage.googleapis.com/a1aa/image/TqtCKCaHwMoWNZ5BguSPcPjXmTPqiujUQt0P1EPmSyw1dp8E.jpg"
            />
          </div>
        </div>

        <h2>Tambahkan Produk Baru</h2>

        <div className="row">
          {/* Product Form */}
          <div className="col-md-6">
            <div className="card-custom">
              <div className="mb-3">
                <label className="form-label" htmlFor="productName">
                  Nama Produk
                </label>
                <input className="form-control" id="productName" type="text" value="Denim Wrangler 80s" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="brand">
                  Merek
                </label>
                <input className="form-control" id="brand" type="text" value="Wrangler" />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="productDescription">
                  Deskripsi Detail Produk
                </label>
                <textarea
                  className="form-control"
                  id="productDescription"
                  rows="3"
                >
                  Denim Wrangler 80s dari era 80-an, berbahan denim tebal, berwarna biru dengan sedikit pudar di bagian siku. Tetap nyaman dan pas untuk gaya retro autentik.
                </textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Ukuran</label>
                <div>
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button key={size} className="btn btn-outline-light size-btn">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Kategori</label>
                <div>
                  {['Pria', 'Wanita', 'Aksesoris'].map((category) => (
                    <button key={category} className="btn btn-outline-light category-btn">
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="price">
                  Harga
                </label>
                <input className="form-control" id="price" type="text" value="Rp. 100.000" />
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="col-md-6">
            <div className="card-custom">
              <div className="mb-3">
                <label className="form-label">Gambar Produk</label>
                <div className="image-upload">
                  {['Z81jy0cQ4Wp6CJ51eSiTcWleLRix9o9bqKW3PelwrlUguLlnA', 'LqeNzARNajVSfUhvnooicrrGVyHGnoRm0hezwleRZjeq7uUeE', 'EDHalqGcE26vNF1gEPNWCvJVnKfl0Ts45y7vlAGE1yxq7S5JA', 'gQiNQKleeeSfUSekzPBvFeJmG3fqrNOVvONdlS899Azwp7S5JA'].map((image, index) => (
                    <img
                      key={index}
                      alt={`Product Image ${index + 1}`}
                      src={`https://storage.googleapis.com/a1aa/image/${image}.jpg`}
                    />
                  ))}
                  <div className="add-image">
                    <i className="fas fa-plus"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-custom mt-3">Simpan Produk</button>
      </div>
    </div>
  );
}
