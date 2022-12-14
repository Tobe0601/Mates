import "./App.css";
import Navbar from "./components/Navbarr";
import Home from "./Homme";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Productss";
import Product from "./Producct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default App;
