import React from "react";
import "./tailwind.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import About from "./pages/About";

import Loading from "./components/Loading";
import Featured from "./pages/products/Featured";
const LazyFeatured = React.lazy(() => import("./pages/products/Featured"));
const LazyCheaper = React.lazy(() => import("./pages/products/Cheaper"));
const LazyNewProducts = React.lazy(() =>
  import("./pages/products/NewProducts")
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route
            path="new"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyNewProducts />
              </React.Suspense>
            }
          />
          <Route
            path="cheaper"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyCheaper />
              </React.Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
