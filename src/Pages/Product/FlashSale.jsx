import React, { useState, useEffect } from "react";
import "./Product.css";

export function FlashSale() {
  const [filters, setFilters] = useState({
    categories: [],
    prices: [],
    sizes: [],
  });

  const [timers, setTimers] = useState({
    countdown1: 7200, // 2 jam
    countdown2: 14400, // 4 jam
    countdown3: 86400, // 24 jam
  });

  const [filteredProduct, setFilteredProduct] = useState([]);

  const product = [
    {
      id: 1,
      name: "Celana Chino",
      price: 40000,
      category: "Bawahan Pria",
      sizes: "M",
      img: "/assets/images/Celana Chino.jpg",
    },
    {
      id: 2,
      name: "Celana Jeans",
      price: 50000,
      category: "Bawahan Wanita",
      sizes: "L",
      img: "/assets/images/Celana Jeans.jpg",
    },
    {
      id: 3,
      name: "Kaos Vneck Hitam",
      price: 50000,
      category: "Atasan Pria",
      sizes: "M",
      img: "/assets/images/Kaos Vneck Hitam.jpg",
    },
    {
      id: 4,
      name: "Rok A-Line",
      price: 30000,
      category: "Bawahan Wanita",
      sizes: "S",
      img: "/assets/images/Rok A-Line.jpg",
    },
  ];

  // Filter produk sesuai filter yang dipilih
  useEffect(() => {
    const { categories, prices, sizes } = filters;
    const filtered = product.filter((product) => {
      const inCategory =
        categories.length === 0 || categories.includes(product.category);

      const inPrice =
        prices.length === 0 ||
        prices.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return product.price >= min && product.price <= max;
        });

      const inSize = sizes.length === 0 || sizes.includes(product.sizes);

      return inCategory && inPrice && inSize;
    });

    setFilteredProduct(filtered);
  }, [filters]);

  // Countdown timer
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

  // Format waktu untuk countdown
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const sec = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="container mt-5 p-5">
      <h2 className="tittle mb-4 text-center">FLASH SALE</h2>

      {/* Timer */}
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

      {/* Produk */}
      <div className="row">
        {filteredProduct.length > 0 ? (
          filteredProduct.map((product) => (
            <div
              key={product.id}
              className="col-6 col-md-4 col-lg-3 mb-4"
            >
              <div className="card product-card">
                <img
                  src={product.img}
                  className="card-img-top img-fluid"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{product.name}</h5>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="price">{`Rp. ${product.price.toLocaleString()}`}</span>
                    <i className="bi bi-plus-circle fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Tidak ada produk yang sesuai filter.</p>
        )}
      </div>
    </div>
  );
}
