import React, { useState } from "react";
import "./Keranjang.css";
import { Link } from "react-router-dom";

export function Keranjang() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Thrift Kaos Vneck Hitam",
      size: "M",
      price: 50000,
      quantity: 1,
      selected: false,
    },
    {
      id: 2,
      name: "Denim Wrangler 80s",
      size: "L",
      price: 100000,
      quantity: 1,
      selected: false,
    },
    {
      id: 3,
      name: "Polo Lacoste Original",
      size: "M",
      price: 50000,
      quantity: 1,
      selected: false,
    },
    {
      id: 4,
      name: "Kaos Band Metallica 90s",
      size: "L",
      price: 50000,
      quantity: 1,
      selected: false,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product
      )
    );
  };

  const handleRemoveProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleSelectAllChange = () => {
    setSelectAll((prevState) => !prevState);
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, selected: !selectAll }))
    );
  };

  const handleProductSelect = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, selected: !product.selected }
          : product
      )
    );
  };

  const calculateTotalPrice = () => {
    return products.reduce(
      (total, product) =>
        product.selected ? total + product.price * product.quantity : total,
      0
    );
  };

  return (
    <div className="badan p-5">
      <h2 className="tulisan p-5">ThriftHunt | Keranjang</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Produk</th>
              <th scope="col">Harga</th>
              <th scope="col">Kuantitas</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={product.selected}
                    onChange={() => handleProductSelect(product.id)}
                  />
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="/assets/images/Celana Formal.jpg"
                      alt={product.name}
                      width="50"
                      height="50"
                      className="me-2"
                    />
                    <div>
                      <div>{product.name}</div>
                      <div className="text-muted">Ukuran: {product.size}</div>
                    </div>
                  </div>
                </td>
                <td>Rp. {product.price.toLocaleString()}</td>
                <td>
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        handleQuantityChange(product.id, product.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          product.id,
                          parseInt(e.target.value) || 1
                        )
                      }
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  Rp. {(product.price * product.quantity).toLocaleString()}
                </td>
                <td>
                  <i
                    className="fas fa-times"
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => handleRemoveProduct(product.id)}
                  ></i>
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    style={{
                      cursor: "pointer",
                      color: "black",
                      background: "none",
                      borderRadius: "50%",
                      width: "20px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: "bold",
                      border: "2px solid black",
                    }}
                  >
                    {" "}
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan="3">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                  style={{ marginRight: "10px" }}
                />{" "}
                Pilih Semua ({products.length} Produk)
              </td>
              <td>Total Harga</td>
              <td>Rp. {calculateTotalPrice().toLocaleString()}</td>
              <td>
                <Link className="checkout-btn text-decoration-none" to={"/checkout"}>Checkout</Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Keranjang;
