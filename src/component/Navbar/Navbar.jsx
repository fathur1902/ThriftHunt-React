import "./Navbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
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
            >
              <input
                type="search"
                className="form-control search-input"
                placeholder="mencari..."
                aria-label="Search"
              />
              <span className="search-icon">
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

              <Link className="nav-link" to="/cart">
                <i className="bi bi-cart"></i>
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
