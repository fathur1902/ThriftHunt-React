import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Product.css";

export function FlashSale() {
  const [timers, setTimers] = useState({
    countdown1: 7200,
    countdown2: 14400,
    countdown3: 86400,
  });

  const [filteredProduct, setFilteredProduct] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        const flashSaleProducts = response.data.filter(
          (product) => product.category === "FlashSale"
        );
        setFilteredProduct(flashSaleProducts);
      } catch (error) {
        setError("Gagal mengambil data produk.");
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => {
        const newTimers = { ...prev };
        Object.keys(newTimers).forEach((key) => {
          if (newTimers[key] > 0) newTimers[key] -= 1;
        });
        return newTimers;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds = 0) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(sec).padStart(2, "0")}`;
  };

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:3000/api/cart",
        { productId: product.id, quantity: 1, selected: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Produk berhasil ditambahkan ke keranjang!");
    } catch (error) {
      console.error("Gagal menambahkan ke keranjang:", error);
    }
  };

  return (
    <div className="container mt-5 p-5">
      <h2 className="tittle mb-4 text-center">FLASH SALE</h2>

      <section className="flash-sale-timer d-flex justify-content-center mb-4 flex-wrap">
        <button className="btn btn-primary mx-1 mb-2">
          {formatTime(timers.countdown1)} <br /> Sedang Berjalan
        </button>
        <button className="btn btn-secondary mx-1 mb-2">
          {formatTime(timers.countdown2)} <br /> Akan Datang
        </button>
        <button className="btn btn-warning mx-1 mb-2">
          {formatTime(timers.countdown3)} <br /> Besok
        </button>
      </section>

      <div className="row">
        {filteredProduct.length > 0 ? (
          filteredProduct.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card product-card">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={`http://localhost:3000/uploads/${product.image}`}
                    className="card-img-top"
                    alt={product.name}
                  />
                </Link>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{product.name}</h5>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="price">
                      <del>599.000</del> {`${product.price.toLocaleString()}`}
                    </span>
                    <button
                      className="btn-cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      <i className="bi bi-plus-circle fs-5"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">
            Tidak ada produk flash sale yang tersedia.
          </p>
        )}
      </div>
    </div>
  );
}
