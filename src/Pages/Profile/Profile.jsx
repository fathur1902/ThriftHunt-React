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
              <a href="/EditProfile" className="btn-profile edit-btn text-center">
                Edit Profil
              </a>
              <button className="btn-profile logout-btn">Keluar</button>
            </div>

            <div className="address-section">
              <h3>Alamat</h3>
              <div className="address-box">
              <h4>
                  Alamat Utama{" "}
                  <a href="/ubahalamat" className="edit-link">
                    <i className="bi bi-pencil-fill"></i> Edit
                  </a>
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
