import "./EditProfile";
import React, { useState } from "react";

export function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
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
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <form className="mt-4" onSubmit={handleSubmit}>
              <h2 className="title-edit mt-4">Edit Profil</h2>

              <div className="mb-4">
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

              <div className="mb-4">
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

              <div className="mb-4">
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

              <div className="mb-4">
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

              <div className="mb-4">
                <label htmlFor="address" className="form-label">
                  Alamat
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Masukkan Alamat"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
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

              <div className=" text-center mb-5">
                <button type="submit" className="text-white bg-primary  btn btn-edit-profile1">
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
