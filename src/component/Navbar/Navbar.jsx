import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const [searchTerm, setSearchTerm] = useState(""); // State untuk menyimpan kata kunci pencarian
  const navigate = useNavigate(); // Hook untuk navigasi programmatically

  // Fungsi untuk menangani pencarian
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Arahkan ke halaman pencarian dengan query parameter
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand me-5" to="/">
              <img
                src="/assets/images/Logo.png"
                alt="Logo"
                width="40"
                height="30"
              />
            </Link>
            <form
              className="d-flex flex-wrap mx-5 position-relative"
              role="search"
              onSubmit={handleSearch} // Menambahkan handler untuk form submission
            >
              <input
                type="search"
                className="form-control search-input"
                placeholder="mencari..."
                aria-label="Search"
                value={searchTerm} // Mengikat input dengan state
                onChange={(e) => setSearchTerm(e.target.value)} // Mengubah nilai state saat input berubah
              />
              <span className="search-icon" onClick={handleSearch}>
                <i className="bi bi-search"></i>
              </span>
            </form>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse" id="navbarNav">
              <Link className="nav-link active" to="/">
                Home
              </Link>

              <Link className="nav-link" to="/about">
                About
              </Link>

              <Link className="nav-link" to="/product">
                Produk
              </Link>

              <Link className="nav-link" to="/keranjang">
                <i className="bi bi-cart"></i>
              </Link>
              <Link
                className="nav-link"
                to="https://wa.me/+6289678737216?text=Chat%20Dengan%20Admin"
              >
                <i className="bi bi-chat-dots"></i>
              </Link>
              <Link className="nav-link" to="/profile">
                <i className="bi bi-person"></i>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
