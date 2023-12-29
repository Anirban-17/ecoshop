import Footer from "./components/Footer";
import Category from "./pages/Category";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/category/:category" element={<Category />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
