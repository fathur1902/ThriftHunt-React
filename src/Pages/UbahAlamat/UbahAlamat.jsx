import React from "react";
import "./UbahAlamat.css";

export const UbahAlamat = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="ubah-alamat form-container w-100">
        <h5 className="mt-4">Kontak</h5>
        <form>
          {/* Email atau Telepon */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email atau Nomor Telepon"
            />
          </div>

          <h5 className="mt-4">Alamat</h5>

          {/* Nama Lengkap dan Nama Panggilan */}
          <div className="mb-3 row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="namaLengkap"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="namaPanggilan"
                placeholder="Nama Panggilan"
              />
            </div>
          </div>

          {/* Alamat dan Alamat Spesifik */}
          <div className="mb-3 row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="alamat"
                placeholder="Alamat dan Nomor Telepon"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="alamatSpesifik"
                placeholder="Alamat Spesifik"
              />
            </div>
          </div>

          {/* Kota, Kode Pos, dan Provinsi */}
          <div className="mb-3 row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="kota"
                placeholder="Kota"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="kodePos"
                placeholder="Kode Pos"
              />
            </div>
            <div className="col">
              <select id="provinsi" className="form-select">
                <option value="" disabled selected>Pilih Provinsi</option>
                <option>Jawa Barat</option>
                <option>Jawa Timur</option>
                <option>Jawa Tengah</option>
              </select>
            </div>
          </div>

          {/* Negara */}
          <div className="mb-4">
            <select id="negara" className="form-select">
              <option value="Indonesia" selected>Indonesia</option>
              <option>Malaysia</option>
              <option>Singapura</option>
            </select>
          </div>

          {/* Checkbox Simpan Informasi */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="simpanInfo"
            />
            <label className="form-check-label" htmlFor="simpanInfo">
              Simpan informasi ini untuk pemesanan selanjutnya
            </label>
          </div>

          {/* Tombol Tambahkan */}
          <div className="text-center">
            <a type="submit" className="btn btn-primary px-5 py-2" href="/profile">
              Tambahkan
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
