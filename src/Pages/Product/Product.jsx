import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../../data/product";
import "./Product.css";

export function Product() {
  const [filters, setFilters] = useState({
    categories: [],
    prices: [],
    sizes: [],
  });

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

  const filteredProduct = products.filter((product) => {
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
              <Link to="/flashsale" className="text-decoration-none text-white">
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
          <div className="row">
            <h2 className="tittle mb-4 text-md-left">Koleksi Produk Kami</h2>
            {filteredProduct.length > 0 ? (
              filteredProduct.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card product-card">
                    <Link to={`../product/${product.id}`}>
                      <img
                        src={product.img}
                        className="card-img-top"
                        alt={product.name}
                      />
                    </Link>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title mb-auto text-start">
                        {product.name}
                      </h5>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="price">
                          {product.price.toLocaleString()}
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
