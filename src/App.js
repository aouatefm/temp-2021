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
import VendorTest from "./store/vendor/VendorTest";
import Product2 from "./store/product/Product2";
import ProductGrid2 from "./store/product/ProductGrid2";
import Login from "./Login/Login";
import Auth from "./Login/Auth";

function App() {
  return (
    <div className="App">
      <NavOne/>
      <NavTwo/>
      <Login/>
    </div>
  );
}

export default App;
