import './App.css';
import NavOne from "./NavOne";
import NavTwo from "./NavTwo";
import SingleProduct from "./SingleProduct";
import Product from "./Product";
import ProductGrid from "./services/ProductGrid";
import React from "react";
import ProductDetail from "./ProductDetail";


function App() {
  return (
    <div className="App">
      <NavOne/>
      <NavTwo/>
      <ProductGrid/>
    </div>
  );
}

export default App;
