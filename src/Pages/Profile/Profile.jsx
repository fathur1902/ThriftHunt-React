import "./Profile.css";

export function Profile() {
  return (
    <>
      <section className="profile-section">
        <div className="container">
          <h2 className="section-title-profile">Akun Saya</h2>
          <div className="profile-content">
            <div className="profile-info">
              <img
                src="/assets/images/idol.jpg"
                alt="Profile Picture"
                className="profile-img"
              />
              <h3 className="profile-name">Sofia Havertz</h3>
              <p className="profile-income">Penghasilan | Rp. 300.000</p>
              <a href="edit-profile.html" className="btn edit-btn">
                Edit Profil
              </a>
              <button className="btn logout-btn">Keluar</button>
            </div>

            <div className="address-section">
              <h3>Alamat</h3>
              <div className="address-box">
                <h4>
                  Alamat Utama{" "}
                  <span className="edit-link">
                    <i className="bi bi-pencil-fill"></i> Edit
                  </span>
                </h4>
                <p>
                  Sofia Havertz
                  <br />
                  (+) 234 567 890
                  <br />
                  Surabaya, Jawa Timur, Indonesia
                </p>
              </div>
              <div className="address-box">
                <h4>
                  Alamat Toko{" "}
                  <span className="edit-link">
                    <i className="bi bi-pencil-fill"></i> Edit
                  </span>
                </h4>
                <p>
                  Sofia Havertz
                  <br />
                  (+) 234 567 890
                  <br />
                  Surabaya, Jawa Timur, Indonesia
                </p>
              </div>
              <div className="address-box">
                <h4>
                  Alamat Rumah{" "}
                  <span className="edit-link">
                    <i className="bi bi-pencil-fill"></i> Edit
                  </span>
                </h4>
                <p>
                  Sofia Havertz
                  <br />
                  (+) 234 567 890
                  <br />
                  Surabaya, Jawa Timur, Indonesia
                </p>
              </div>
              <div className="address-box">
                <h4>
                  Alamat Kantor{" "}
                  <span className="edit-link">
                    <i className="bi bi-pencil-fill"></i> Edit
                  </span>
                </h4>
                <p>
                  Sofia Havertz
                  <br />
                  (+) 234 567 890
                  <br />
                  Surabaya, Jawa Timur, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
