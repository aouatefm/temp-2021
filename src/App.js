import React from "react";
import './App.css';
import NavOne from "./header/NavOne";
import NavTwo from "./header/NavTwo";

import Product from "./store/product/Product";
import ProductGrid from "./store/product/ProductGrid";
import ProductDetail from "./store/product/ProductDetail";

import Vendor from "./store/vendor/Vendor";
import VendorGrid from "./store/vendor/VendorGrid";
import VendorDetail from "./store/vendor/VendorDetail";

function App() {
  return (
    <div className="App">
      <NavOne/>
      <NavTwo/>
      <ProductDetail/>
    </div>
  );
}

export default App;
