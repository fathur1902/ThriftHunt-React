import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Checkout.css';

export function Checkout() {
  return (
    <div className="container my-5">
      <h2>ThriftHunt | Pemesanan</h2>

      <h4 className="mt-4">Alamat Pengiriman</h4>
      <p>
        <strong>Ascending (+62) 852315642578</strong><br />
        Perumahan Telang Indah, Jalan Telang Indah Barat Gang IV No. 4,
        Telang, Bangkalan, KAB. BANGKALAN - BANGKALAN, JAWA TIMUR, ID 69119
        <a className="btn btn-custom btn-sm ms-2" href="alamat.html">Ubah</a>
      </p>

      <h4 className="mt-4">Rincian Produk</h4>
      <div className="card p-3">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Produk</th>
              <th>Harga Satuan</th>
              <th>Kuantitas</th>
              <th>SubTotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://storage.googleapis.com/a1aa/image/9cdDBenbw9UUBqPpW7ZZfJwQCLHd5M6Tpa3nHwOKbYrN86yTA.jpg"
                  alt="Thrift Kaos Vneck Hitam"
                  className="me-2"
                  height="50"
                  width="50"
                />
                Thrift Kaos Vneck Hitam<br />
                Ukuran: M
              </td>
              <td>Rp. 50.000</td>
              <td>1</td>
              <td>Rp. 50.000</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://storage.googleapis.com/a1aa/image/J6QwIbbQUXIvPpDlMBFXWielTXTdN9dcXaQou3atertG86yTA.jpg"
                  alt="Denim Wrangler 80s"
                  className="me-2"
                  height="50"
                  width="50"
                />
                Denim Wrangler 80s<br />
                Ukuran: L
              </td>
              <td>Rp. 100.000</td>
              <td>1</td>
              <td>Rp. 100.000</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://storage.googleapis.com/a1aa/image/jWU4D5wEF5JoBxCY47fIR604O0CGVC5MojWZoBCeWKhF86yTA.jpg"
                  alt="Vans Checkerboard Classic"
                  className="me-2"
                  height="50"
                  width="50"
                />
                Vans Checkerboard Classic<br />
                Ukuran: 39
              </td>
              <td>Rp. 100.000</td>
              <td>1</td>
              <td>Rp. 100.000</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://storage.googleapis.com/a1aa/image/umBvc5ZpsHYoApNqVesQmvxkbtyYJEbfLQL3zLUuW27I86yTA.jpg"
                  alt="Kaos Band Metallica 90s"
                  className="me-2"
                  height="50"
                  width="50"
                />
                Kaos Band Metallica 90s<br />
                Ukuran: L
              </td>
              <td>Rp. 50.000</td>
              <td>1</td>
              <td>Rp. 50.000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="mt-4">Metode Pembayaran</h4>
      <div className="card p-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="bank"
            value="bank"
          />
          <label className="form-check-label" htmlFor="bank">Bank</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="cod"
            value="cod"
          />
          <label className="form-check-label" htmlFor="cod">COD</label>
        </div>
      </div>

      <h4 className="mt-4">Rincian Pembayaran</h4>
      <div className="card p-3">
        <div className="row">
          <div className="col-6">
            <p>Subtotal untuk Produk</p>
            <p>Subtotal Pengiriman</p>
            <p>Diskon</p>
            <h5>Total Pembayaran:</h5>
          </div>
          <div className="col-6 text-end">
            <p>Rp. 300.000</p>
            <p>Rp. 0</p>
            <p>Rp. 10.000</p>
            <h5>Rp. 290.000</h5>
          </div>
        </div>
        <a className="btn btn-custom w-100" href="kode-bayar.html">Buat Pesanan</a>
      </div>
    </div>
  );
};
