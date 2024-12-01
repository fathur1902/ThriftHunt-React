import React from "react";
import "./DashboardP.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faBox, faArrowLeft, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function DashboardP() {
  const changePage = (pageUrl) => {
    window.location.href = pageUrl;
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar mt-0">
        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-white rounded-circle me-2"
            style={{ width: "40px", height: "40px" }}
          ></div>
          <h1 className="fs-4 fw-bold">Thrift Hunt</h1>
        </div>
        <button className="btn btn-gradient mb-3" onClick={() => changePage("dashboard")}>
          <FontAwesomeIcon icon={faEdit} className="me-2" />
          Edit Produk
        </button>
        <button className="btn btn-light mb-3" onClick={() => changePage("/DashboardP")}>
          <FontAwesomeIcon icon={faBox} className="me-2" />
          Lihat Pesanan
        </button>
        <button className="btn btn-gradient" onClick={() => changePage("/login")}>
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-fill p-4 bg-white" >
        <h2 className="fs-3 fw-semibold">Daftar Pesanan</h2>
        <div className="d-flex flex-column gap-4">
          {/* Pesanan 1 */}
          <OrderCard
            name="Dian Putri A."
            address="Jln, Watu gede, No: 58 Ngaglik, Sariharjo, Sleman, DI Yogyakarta."
            phone="089787675743"
            details={[
              { item: "Cardigan kotak", price: "Rp 50.000" },
              { item: "Blouse Biru", price: "Rp 50.000" },
            ]}
          />

          {/* Pesanan 2 */}
          <OrderCard
            name="Jay Park"
            address="Jln Menganti, No 20 Lidah Kulon, Lakar Santri, Surabaya."
            phone="086787898901"
            details={[
              { item: "Celana Jeans", price: "Rp 100.000" },
              { item: "Kaos Putih", price: "Rp 50.000" },
            ]}
          />

          {/* Pesanan 2 */}
          <OrderCard
            name="Jay Park"
            address="Jln Menganti, No 20 Lidah Kulon, Lakar Santri, Surabaya."
            phone="086787898901"
            details={[
              { item: "Celana Jeans", price: "Rp 100.000" },
              { item: "Kaos Putih", price: "Rp 50.000" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function OrderCard({ name, address, phone, details }) {
  return (
    <div className="order-card position-relative">
      <div className="close-btn">
        <i className="fas fa-times"></i>
      </div>
      <h5>{name}</h5>
      <p>
        Alamat: {address}
        <br />
        No. Telp: {phone}
        <br />
        Total Produk: {details.length}
      </p>
      <p>
        Detail:
        <br />
        {details.map((detail, index) => (
          <span key={index}>
            {index + 1}. {detail.item}: {detail.price}
            <br />
          </span>
        ))}
      </p>
      <div className="status-container">
        <button className="status-btn">Konfirmasi Pesanan</button>
        <button className="status-btn">Sedang Dikemas</button>
        <button className="status-btn">Dikirim</button>
        <button className="status-btn">Selesai</button>
        <button className="status-btn">Chat Pembeli</button>
      </div>
    </div>
  );
}
