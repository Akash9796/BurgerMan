import React from "react";
import "../styles/paymentSuccess.scss";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  return (
    <section className="paymentSuccess">
      <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully, You can check order details below.</p>
        <Link to="/myorders">Check Status</Link>
      </main>
    </section>
  );
}
