import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

export function FlashSale() {
  const [filters, setFilters] = useState({
    categories: [],
    prices: [],
    sizes: [],
  });

  const [countdown1, setCountdown1] = useState(0);
  const [countdown2, setCountdown2] = useState(0);
  const [countdown3, setCountdown3] = useState(0);

  const product = [
    {
      id: 1,
      name: "Celana Chino",
      price: 40000,
      category: "Bawahan Pria",
      size: "M",
      img: "/assets/images/Celana Chino.jpg",
    },
    {
      id: 2,
      name: "Celana Jeans",
      price: 50000,
      category: "Bawahan Wanita",
      size: "L",
      img: "/assets/images/Celana Jeans.jpg",
    },
    {
      id: 3,
      name: "Kaos Vneck Hitam",
      price: 50000,
      category: "Atasan Pria",
      size: "M",
      img: "/assets/images/Kaos Vneck Hitam.jpg",
    },
    {
      id: 4,
      name: "Rok A-Line",
      price: 30000,
      category: "Bawahan Wanita",
      size: "S",
      img: "/assets/images/Rok A-Line.jpg",
    },
    {
      id: 5,
      name: "Celana Pendek",
      price: 50000,
      category: "Bawahan Pria",
      size: "L",
      img: "/assets/images/Celana Pendek.jpg",
    },
    {
      id: 6,
      name: "Celana Corduroy",
      price: 50000,
      category: "Bawahan Wanita",
      size: "S",
      img: "/assets/images/Celana Corduroy.jpg",
    },
    {
      id: 7,
      name: "Topi",
      price: 50000,
      category: "Aksesoris",
      size: "L",
      img: "/assets/images/topi.jpg",
    },
    {
      id: 8,
      name: "Sepatu Thruffle Boots",
      price: 50000,
      category: "Aksesoris",
      size: "XL",
      img: "/assets/images/sepatu Truffle Boots.jpg",
    },
    {
      id: 9,
      name: "Ransel Denim",
      price: 50000,
      category: "Aksesoris",
      size: "L",
      img: "/assets/images/Ransel Denim.jpg",
    },
  ];

  const handleCheckboxChange = (type, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter((item) => item !== value);
      } else {
        newFilters[type].push(value);
      }
      return newFilters;
    });
  };
  const filteredProduct = product.filter((product) => {
    const { categories, prices, sizes } = filters;

    const inCategory = categories.length
      ? categories.includes(product.category)
      : true;
    const inPrice =
      prices.length > 0
        ? prices.some((range) => {
            const [min, max] = range.split("-").map(Number);
            return product.price >= min && product.price <= max;
          })
        : true;
    const inSize = sizes.length ? sizes.includes(product.size) : true;

    return inCategory && inPrice && inSize;
  });

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCountdown1((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);
    const interval2 = setInterval(() => {
      setCountdown2((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);
    const interval3 = setInterval(() => {
      setCountdown3((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(sec).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="container mt-5">
      {/* <section className="tittle mb-4 text-md-left">
        <h2>Koleksi Produk Kami</h2>
      </section> */}

      <div className="row">
        <section className="col-12 col-md-3">
          <div className="list-group-container mx-md-0 mx-auto mb-3">
            <h5 className="list-group">| Kategori</h5>
            {[
              "Atasan Pria",
              "Bawahan Pria",
              "Atasan Wanita",
              "Bawahan Wanita",
              "Aksesoris",
            ].map((category) => (
              <label
                key={category}
                className={`list-group-item list-group-item-action ${
                  filters.categories.includes(category)
                    ? "selected-category"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  value={category}
                  onChange={() => handleCheckboxChange("categories", category)}
                />{" "}
                {category}
              </label>
            ))}
            <div className="list-group-item list-group-item-action">
              <Link
                to="/flash-sale"
                className="text-decoration-none text-white"
              >
                Flash Sale
              </Link>
            </div>
          </div>
          <div className="list-group-container mb-3">
            <h5 className="list-group">| Harga</h5>
            {[
              "20000-50000",
              "50000-100000",
              "100000-150000",
              "150000-200000",
            ].map((priceRange) => (
              <label
                key={priceRange}
                className={`list-group-item list-group-item-action ${
                  filters.prices.includes(priceRange) ? "selected-category" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  value={priceRange}
                  onChange={() => handleCheckboxChange("prices", priceRange)}
                />{" "}
                {`Rp. ${priceRange.replace("-", " - Rp. ")}`}
              </label>
            ))}
          </div>
          <div className="list-group-container mb-3">
            <h5 className="list-group">| Ukuran</h5>
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <label
                key={size}
                className={`list-group-item list-group-item-action ${
                  filters.sizes.includes(size) ? "selected-category" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  value={size}
                  onChange={() => handleCheckboxChange("sizes", size)}
                />{" "}
                {size}
              </label>
            ))}
          </div>
        </section>

        <section className="col-md-9">
          <h2 className="tittle mb-4 text-md-left">Koleksi Produk Kami</h2>
          <section className="flash-sale-timer d-flex justify-content-end mb-2 flex-wrap">
            <button className="btn btn-primary mx-2 mb-2" id="countdown1">
              {formatTime(countdown1)} <br /> Sedang Berjalan
            </button>
            <button className="btn btn-primary mx-2 mb-2" id="countdown2">
              {formatTime(countdown2)} <br /> Akan Datang
            </button>
            <button className="btn btn-primary mx-2 mb-2" id="countdown3">
              {formatTime(countdown3)} <br /> Besok
            </button>
          </section>
          <div className="row">
            {filteredProduct.length > 0 ? (
              filteredProduct.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card product-card">
                    <img
                      src={product.img}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title mb-auto text-start">
                        {product.name}
                      </h5>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="price">
                          Rp. {product.price.toLocaleString()}
                        </span>
                        <i className="bi bi-plus-circle fs-5"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white">
                Tidak ada produk yang sesuai dengan filter.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
