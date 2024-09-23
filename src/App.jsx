import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Favourites from "./pages/Favourites";
import Checkout from "./pages/Checkout";
import "./App.css";

const App = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addProduct" element={<ProductPage />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
};

export default App;
