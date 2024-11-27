import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faBox, faArrowLeft, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Dashboard() {
  const changePage = (pageUrl) => {
    window.location.href = pageUrl;
  };

  return (
    <div className="bg-light d-flex">
      {/* Sidebar */}
      <div className="sidebar mt-0">
        <div className="d-flex align-items-center mb-4">
          <div
            className="bg-white rounded-circle me-2"
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

      {/* Main Content */}
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
        <button
          className="btn btn-primary mb-4"
          onClick={() => changePage("/tambahp")}
        >
          Tambah Produk
        </button>

        {/* Product Table */}
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>Produk</th>
                <th>Harga</th>
                <th>Kuantitas</th>
                <th>Kategori</th>
                <th>Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {/* Product Row 1 */}
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Denim Wrangler 80s"
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <div>Denim Wrangler 80s</div>
                      <small className="text-muted">Ukuran: M</small>
                    </div>
                  </div>
                </td>
                <td>Rp. 100.000</td>
                <td>
                  <input
                    className="form-control text-center"
                    type="number"
                    defaultValue="1"
                    style={{ width: "70px" }}
                  />
                </td>
                <td>Pria</td>
                <td>
                  <Link className="btn btn-warning btn-sm me-2" to="/EditP">
                    <FontAwesomeIcon icon={faEdit} className="me-1" />
                    Edit
                  </Link>
                  <button className="btn btn-danger btn-sm">
                    <FontAwesomeIcon icon={faTrash} className="me-1" />
                    Hapus
                  </button>
                </td>
              </tr>
              {/* Duplicate rows if needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}