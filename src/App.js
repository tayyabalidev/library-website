
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Bookinfo from "./pages/Bookinfo";
import Cart from "./pages/Cart";
import { books } from "./data";
import Highlights from "./components/Highlights";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map((item) =>
      item.id === book.id
        ? {
          ...item,
          quantity: +quantity,
        }
        : item
    ));
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {
    // console.log(cart);
  }, [cart]);

  return (
    <div className="app">
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books books={books} />} />
        <Route path="/Cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        <Route path="/Books/:id" element={<Bookinfo books={books} addToCart={addToCart} cart={cart} />} />

      </Routes>
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
