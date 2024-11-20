import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import Footer from "./component/Footer/Footer";
import { Login } from "./Pages/Login/Login";
import { About } from "./Pages/About/About";
import { Signup } from "./Pages/SignUp/SignUp";
import { Product } from "./Pages/Product/Product";
import { FlashSale } from "./Pages/Product/FlashSale";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Profile } from "./Pages/Profile/Profile";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Checkout } from "./Pages/Checkout/Checkout";
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
    location.pathname.toLowerCase() !== "/signup";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="About" element={<About />} />
        <Route path="SignUp" element={<Signup />} />
        <Route path="Product" element={<Product />} />
        <Route path="FlashSale" element={<FlashSale />} />
        <Route path="Profile" element={<Profile />} />
        {/* <Route path="ProductDetail" element={<ProductDetai
        {/* <Route path="ProductDetail" element={<ProductDetail />} /> */}
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Checkout" element={<Checkout />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}
export default App;
