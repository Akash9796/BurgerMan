import "./styles/app.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Shipping from "./Components/Shipping";
import Login from "./Components/Login";
import PaymentSuccess from "./Components/PaymentSuccess";
import ConfirmOrder from "./Components/ConfirmOrder";
import MyOrder from "./Components/MyOrders";
import OrderDetails from "./Components/OrderDetails";
import MyProfile from "./Components/MyProfile";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import Dashboard from "./Components/admin/Dashboard";
import { ProtectedRoute } from "protected-route-react";

function App() {

  return (
    <Router basename="/BurgerMan">
      <div className="App">
        <Header isAuthenticated={true} />
        <Routes>
          <Route
            path="/login"
            element={
              <ProtectedRoute isAuthenticated={true} redirect="/me">
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/me" element={<MyProfile isAuthenticated />} />
          <Route
            element={
              <ProtectedRoute isAuthenticated={true} redirect="/login" />
            }
          >
            <Route path="/" element={<Home  />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart  />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/confirmOrder" element={<ConfirmOrder />} />
            <Route path="/paymentSuccess" element={<PaymentSuccess />} />

            <Route path="/myorders" element={<MyOrder />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
