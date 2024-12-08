import React from "react";
import "./RiwayatPesanan.css";

export const Dibatalkan = () => {
  const changePage = (pageUrl) => {
    // Redirect ke halaman yang sesuai
    window.location.href = pageUrl;
  };

  return (
    <div className="container mt-5 p-5">
      {/* Header */}
      <h4>ThriftHunt | Riwayat Pesanan</h4>

      {/* Tabs */}
      <div className="tabs-container my-4 d-flex justify-content-around bg-white p-3 rounded">
      <div
          className="tab-item"
          onClick={() => changePage("/konfirmasipesanan")}
        >
          Konfirmasi Pesanan
        </div>
        <div
          className="tab-item"
          onClick={() => changePage("/riwayatpesanan")}
        >
          Sedang Dikemas
        </div>
        <div
          className="tab-item"
          onClick={() => changePage("/dikirim")}
        >
          Dikirim
        </div>
        <div
          className="tab-item"
          onClick={() => changePage("/selesai")}
        >
          Selesai
        </div>
        <div
          className="tab-item active-tab"
          onClick={() => changePage("/dibatalkan")}
        >
          Dibatalkan
        </div>
      </div>

      {/* Content */}
      <div className="card-riwayat">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="order-header">
            Sedang Dikemas – Pesanan Anda sedang diproses untuk pengiriman.
          </div>
          <a href="#" className="text-primary font-weight-bold">
            LIHAT DETAIL
          </a>
        </div>

        {/* Product List */}
        <div className="product-row">
          <img
            src="https://via.placeholder.com/80"
            alt="Thrift Kaos Vneck Hitam"
            className="product-img"
          />
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div>
              <div className="font-weight-bold">Thrift Kaos Vneck Hitam</div>
              <div className="order-details">Ukuran: M</div>
            </div>
            <div className="font-weight-bold">Rp. 100.000</div>
          </div>
        </div>
        <div className="product-row">
          <img
            src="https://via.placeholder.com/80"
            alt="Denim Wrangler 80s"
            className="product-img"
          />
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div>
              <div className="font-weight-bold">Denim Wrangler 80s</div>
              <div className="order-details">Ukuran: L</div>
            </div>
            <div className="font-weight-bold">Rp. 50.000</div>
          </div>
        </div>
        <div className="product-row">
          <img
            src="https://via.placeholder.com/80"
            alt="Vans Checkerboard Classic"
            className="product-img"
          />
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div>
              <div className="font-weight-bold">Vans Checkerboard Classic</div>
              <div className="order-details">Ukuran: 39</div>
            </div>
            <div className="font-weight-bold">Rp. 100.000</div>
          </div>
        </div>
        <div className="product-row">
          <img
            src="https://via.placeholder.com/80"
            alt="Kaos Band Metallica 90s"
            className="product-img"
          />
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div>
              <div className="font-weight-bold">Kaos Band Metallica 90s</div>
              <div className="order-details">Ukuran: L</div>
            </div>
            <div className="font-weight-bold">Rp. 50.000</div>
          </div>
        </div>

        {/* Total Price */}
        <div className="d-flex justify-content-between align-items-center font-weight-bold mt-4">
          <div>Total Pesanan:</div>
          <div>Rp. 290.000</div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-primary mr-3">Hubungi Kami</button>
          <button className="btn btn-outline-primary">Beli Lagi</button>
        </div>
      </div>
    </div>
  );
};
