import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";

export function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/cart", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Jika API memerlukan token
          },
        });

        if (response.data && Array.isArray(response.data)) {
          const totalCount = response.data.reduce(
            (total, product) => total + (product.quantity || 0),
            0
          );
          setCartCount(totalCount);
        } else {
          console.warn(
            "Cart data is not in the expected format:",
            response.data
          );
        }
      } catch (error) {
        console.error(
          "Error fetching cart data:",
          error.response?.data || error.message
        );
      }
    };

    fetchCartCount();
  }, []); // Kosongkan dependencies agar hanya dipanggil sekali

  return (
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
            onSubmit={handleSearch}
          >
            <input
              type="search"
              className="form-control search-input"
              placeholder="mencari..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
            <Link className="nav-link active" to="/home">
              Beranda
            </Link>

            <Link className="nav-link" to="/about">
              Tentang Kami
            </Link>

            <Link className="nav-link" to="/product">
              Produk
            </Link>

            <Link className="nav-link position-relative" to="/keranjang">
              <i className="bi bi-cart"></i>
              {cartCount > 0 && (
                <span className="cart-item-count">
                  {cartCount}
                </span>
              )}
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
  );
}

export default Navbar;
