import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Signup.css"; // Pastikan file CSS Anda sudah terhubung.

export function Signup() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const validateDaftar = () => {
    const { nama, email, password, confirmPassword, agree } = formData;

    if (!nama || !email || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mohon isi semua kolom yang diperlukan.",
      });
    } else if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Konfirmasi sandi tidak sesuai.",
      });
    } else if (!agree) {
      Swal.fire({
        icon: "warning",
        title: "Peringatan",
        text: "Anda harus menyetujui Ketentuan Layanan dan Kebijakan Privasi.",
      });
    } else {
      Swal.fire({
        title: "Good job!",
        text: "Anda berhasil daftar!",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/login";
        }
      });
    }
  };

  return (
    <div className="container-signup">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/* Left Box */}
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
            <div className="featured-image mb-3">
              <img
                src="/assets/images/Signup.png"
                className="img-fluid"
                style={{ width: "950px" }}
                alt="Signup"
              />
            </div>
          </div>

          {/* Right Box */}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-2">
                <h2 className=" text-black ">Daftar</h2>
              </div>
              <small className=" text-black " >Nama Lengkap</small>
              <div className="input-group mb-3">
                <input
                  id="nama"
                  type="text"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Nama lengkap"
                  value={formData.nama}
                  onChange={handleChange}
                />
              </div>
              <small className=" text-black " >Email</small>
              <div className="input-group mb-3">
                <input
                  id="email"
                  type="email"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Alamat email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <small className=" text-black " >Sandi</small>
              <div className="input-group mb-3">
                <input
                  id="password"
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Buat sandi"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <small className=" text-black " >Konfirmasi Sandi</small>
              <div className="input-group mb-3">
                <input
                  id="confirmPassword"
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  placeholder="Konfirmasi Sandi"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="agree"
                    className="form-check-label text-secondary"
                  >
                    <small>
                      Saya telah membaca Ketentuan Layanan dan Kebijakan Privasi
                    </small>
                  </label>
                </div>
              </div>
              <div className="input-group mb-3">
                <button
                  onClick={validateDaftar}
                  className="btn btn-lg btn-primary w-100 fs-6"
                >
                  Daftar
                </button>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6">
                  <img
                    src="/assets/images/Google.png"
                    style={{ width: "20px" }}
                    className="me-2"
                    alt="Google"
                  />
                  <small>Daftar menggunakan Google</small>
                </button>
              </div>
              <div className="row">
                <small className=" text-black " >
                  Sudah punya akun? <a href="/Login">Masuk aja</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
