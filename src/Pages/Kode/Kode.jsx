import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Kode.css";

export function Kode() {
  const copyToClipboard = () => {
    const vaNumber = "1234567890123456";
    navigator.clipboard
      .writeText(vaNumber)
      .then(() => {
        alert("Nomor VA berhasil disalin!");
      })
      .catch((err) => {
        console.error("Gagal menyalin teks: ", err);
      });
  };

  return (
    <div className="card-kode p-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          <div>Total Pembayaran</div>
          <small>Waktu Akhir Pembayaran</small>
        </div>
        <div className="text-end">
          <div className="fs-4 fw-bold">Rp. 290.000</div>
          <small>23 jam 58 menit 57 detik</small>
        </div>
      </div>
      <div className="card-body">
        <div className="mb-2 mt-2">
          <strong>Bank Mandiri</strong>
        </div>
        <div className="mb-4">
          <small>Nomor Rekening:</small>
          <div className="d-flex justify-content-between align-items-center">
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              1234567890123456
            </div>
            <button className="btn btn-link" onClick={copyToClipboard}>
              Salin
            </button>
          </div>
        </div>
        <div>
          Bayar pesanan ke Virtual Account di atas sebelum membuat pesanan baru
          untuk memastikan nomor tetap sama.
        </div>
        <a href="/dikirim" className="btn btn-primary mt-4">Selanjutnya</a>
      </div>
    </div>
  );
}
