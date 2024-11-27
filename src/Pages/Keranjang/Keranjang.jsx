import React from "react";
import "./Keranjang.css";

export const Keranjang = () => {
  const handleQuantityChange = (event, type) => {
    const input = event.target.parentElement.querySelector("input");
    let value = parseInt(input.value);

    if (type === "increase") {
      input.value = value + 1;
    } else if (type === "decrease" && value > 1) {
      input.value = value - 1;
    }
  };

  return (
    <div className="container-keranjang">
      <h2 className="nama-keranjang">ThriftHunt | Keranjang Belanja</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">Produk</th>
              <th scope="col">Harga</th>
              <th scope="col">Kuantitas</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    alt="Thrift Kaos Vneck Hitam"
                    className="me-2"
                    height="50"
                    src="https://storage.googleapis.com/a1aa/image/Tdf3IalJGd0NX6t9cARqpTbdDcVm8Qt20AzqiaCUn2feEPlnA.jpg"
                    width="50"
                  />
                  <div>
                    <div>Thrift Kaos Vneck Hitam</div>
                    <div className="text-muted">Ukuran: M</div>
                  </div>
                </div>
              </td>
              <td>Rp. 50.000</td>
              <td>
                <div className="quantity-control">
                  <button onClick={(e) => handleQuantityChange(e, "decrease")}>
                    -
                  </button>
                  <input type="text" defaultValue="1" />
                  <button onClick={(e) => handleQuantityChange(e, "increase")}>
                    +
                  </button>
                </div>
              </td>
              <td>Rp. 50.000</td>
              <td>
                <i className="fas fa-times"></i>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Pilih Semua (4 Produk)</td>
              <td></td>
              <td>Total (1 Produk)</td>
              <td>Rp. 50.000</td>
              <td>
                <button className="checkout-btn">Checkout</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};