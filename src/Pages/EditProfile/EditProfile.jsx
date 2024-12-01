import React, { useState } from "react";

export function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk submit data
  };

  return (
    <div className="container p-5 mt-4">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h2 className="text-center mb-4">Edit Profil</h2>
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Nama Depan
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Masukkan Nama Depan"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Nama Belakang
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Masukkan Nama Belakang"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Nomor HP
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Masukkan Nomor HP"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Masukkan Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="oldPassword" className="form-label">
                Ganti Sandi
              </label>
              <input
                type="password"
                className="form-control mb-2"
                id="oldPassword"
                placeholder="Sandi Sebelumnya"
                value={formData.oldPassword}
                onChange={handleChange}
              />
              <input
                type="password"
                className="form-control mb-2"
                id="newPassword"
                placeholder="Sandi Baru"
                value={formData.newPassword}
                onChange={handleChange}
              />
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Konfirmasi Sandi Baru"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
