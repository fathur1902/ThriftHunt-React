import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import Footer from "./component/Footer/Footer";
import { Login } from "./Pages/Login/Login";
import { About } from "./Pages/About/About";
import { Signup } from "./Pages/SignUp/SignUp";
import { Product } from "./Pages/Product/Product";
import { FlashSale } from "./Pages/Product/FlashSale";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import { Profile } from "./Pages/Profile/Profile";
import { EditProfile } from "./Pages/EditProfile/EditProfile";
import { Category } from "./component/Category/Category";
import { EditP } from "./Pages/TambahP/EditP";
import { Checkout } from "./Pages/Checkout/Checkout";
import { Kode } from "./Pages/Kode/Kode";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { DashboardP } from "./Pages/DashboardP/DashboardP";
import { RiwayatPesanan } from "./Pages/RiwayatPesanan/RiwayatPesanan";
import { Dikirim } from "./Pages/RiwayatPesanan/Dikirim";
import { Selesai } from "./Pages/RiwayatPesanan/Selesai";
import { Dibatalkan } from "./Pages/RiwayatPesanan/Dibatalkan";
import { UbahAlamat } from "./Pages/UbahAlamat/UbahAlamat";
import { TambahP } from "./Pages/TambahP/TambahP";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
function AppContent() {
  const location = useLocation();
  const showFooter =
    location.pathname.toLowerCase() !== "/login" &&
    location.pathname.toLowerCase() !== "/signup" &&
    location.pathname.toLowerCase() !== "/editp" &&
    location.pathname.toLowerCase() !== "/dashboardp" &&
    location.pathname.toLowerCase() !== "/tambahp" &&
    location.pathname.toLowerCase() !== "/dashboard";

  const showNavbar =
    location.pathname.toLowerCase() !== "/editp" &&
    location.pathname.toLowerCase() !== "/dashboardp" &&
    location.pathname.toLowerCase() !== "/tambahp" &&
    location.pathname.toLowerCase() !== "/dashboard";

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="About" element={<About />} />
        <Route path="SignUp" element={<Signup />} />
        <Route path="Product" element={<Product />} />
        <Route path="FlashSale" element={<FlashSale />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="EditProfile" element={<EditProfile />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="EditP" element={<EditP />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="Kode" element={<Kode />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="DashboardP" element={<DashboardP />} />
        <Route path="RiwayatPesanan" element={<RiwayatPesanan />} />
        <Route path="Dikirim" element={<Dikirim />} />
        <Route path="Selesai" element={<Selesai />} />
        <Route path="Dibatalkan" element={<Dibatalkan />} />
        <Route path="UbahAlamat" element={<UbahAlamat />} />
        <Route path="TambahP" element={<TambahP />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}
export default App;
