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

import { TambahP } from "./Pages/TambahP/TambahP";
import { Checkout } from "./Pages/Checkout/Checkout";
import { Kode } from "./Pages/Kode/Kode";
import { Dashboard } from "./Pages/Dashboard/Dashboard";

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
    location.pathname.toLowerCase() !== "/tambahp" &&
    location.pathname.toLowerCase() !== "/dashboard";

  return (
    <>
      <Navbar />
      <Routes>
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

        {/* <Route path="ProductDetail" element={<ProductDetai
        {/* <Route path="ProductDetail" element={<ProductDetail />} /> */}

        <Route path="TambahP" element={<TambahP />} />
        <Route path="Checkout" element={<Checkout />} />
        <Route path="Kode" element={<Kode />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}
export default App;
