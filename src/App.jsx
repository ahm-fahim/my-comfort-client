import "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Collections from "./pages/Collections";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrders from "./pages/PlaceOrders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[2vw] lg:px-[9vw]">
      <Navbar />
      <SearchBar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productId" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/placeOrders" element={<PlaceOrders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
