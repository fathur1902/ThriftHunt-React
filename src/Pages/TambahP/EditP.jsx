// src/App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TambahP.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faBox, faArrowLeft, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";

export function EditP() {
  // Fungsi untuk menangani perubahan halaman (dapat disesuaikan nanti untuk routing)
  const changePage = (pageUrl) => {
    window.location.href = pageUrl;
  };

  return (
    <div className="bg-light d-flex">
      {/* Sidebar */}
      <div className="sidebar mt-0">
        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-white rounded-circle me-3"
            style={{ width: "40px", height: "40px" }}
          ></div>
          <h1 className="fs-4 fw-bold">Thrift Hunt</h1>
        </div>
        <button className="btn btn-light mb-3" onClick={() => changePage("dashboard")}>
          <FontAwesomeIcon icon={faEdit} className="me-2" />
          Edit Produk
        </button>
        <button className="btn btn-gradient mb-3" onClick={() => changePage("/dashboardp")}>
          <FontAwesomeIcon icon={faBox} className="me-2" />
          Lihat Pesanan
        </button>
        <button className="btn btn-gradient" onClick={() => changePage("/login")}>
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Logout
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-fill p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fs-3 fw-semibold">Produk</h2>
          <div className="d-flex align-items-center">
            <input
              className="form-control me-3"
              type="text"
              placeholder="Mencari..."
              style={{ width: "200px" }}
            />
            <FontAwesomeIcon icon={faSearch} className="text-muted" />
            <div className="d-flex align-items-center ms-4">
              <div
                className="bg-secondary rounded-circle me-2"
                style={{ width: "40px", height: "40px" }}
              ></div>
              <span>Admin Thrift Hunt</span>
            </div>
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
                <div class="mb-3">
                  <label for="formFile" class="form-label">Tambah Gambar Produk</label>
                  <input class="form-control" type="file" id="formFile"/>
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
