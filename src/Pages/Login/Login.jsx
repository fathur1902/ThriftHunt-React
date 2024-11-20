import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Login.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // Fungsi untuk validasi login
  const validateLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mohon isi email dan sandi Anda.",
      });
    } else {
      Swal.fire({
        title: "Good job!",
        text: "Anda berhasil login!",
        icon: "success",
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect jika diperlukan (ganti dengan route yang sesuai)
          window.location.href = "/Home";
        }
      });
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="container d-flex justify-content-center">
          <div className="row border rounded-5 p-3 bg-white shadow box-area">
            {/* Left Box */}
            <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
              <div className="featured-image mb-3">
                <img
                  src="/assets/images/Login.png"
                  className="img-fluid"
                  style={{ width: "450px" }}
                  alt="Login"
                />
              </div>
            </div>

            {/* Right Box */}
            <div className="col-md-6 right-box">
              <div className="row align-items-center">
                <div className="header-text mb-2">
                  <h2>Masuk</h2>
                </div>
                <small>Masukkan email</small>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Alamat email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Mengatur state email
                  />
                </div>

                <small>Masukkan sandi</small>
                <div className="input-group mb-1">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg bg-light fs-6"
                    placeholder="Sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Mengatur state password
                  />
                </div>

                <div className="input-group mb-3 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formCheck"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)} // Mengatur state rememberMe
                    />
                    <label
                      htmlFor="formCheck"
                      className="form-check-label text-secondary"
                    >
                      <small>Ingat saya</small>
                    </label>
                  </div>
                  <div className="forgot">
                    <small>
                      <a href="#">Lupa sandi?</a>
                    </small>
                  </div>
                </div>

                {/* Tombol Masuk */}
                <div className="input-group mb-3">
                  <button
                    className="btn btn-lg btn-primary w-100 fs-6"
                    onClick={validateLogin} // Menangani klik tombol
                  >
                    Masuk
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
                    <small>Masuk menggunakan Google</small>
                  </button>
                </div>

                {/* Link untuk halaman signup */}
                <div className="row">
                  <small>
                    Belum memiliki akun? <a href="/SignUp">Buat akun</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
