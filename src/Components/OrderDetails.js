import React from "react";
import "../styles/orderdetails.scss";

export default function OrderDetails() {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"sdknbkd sfnd sfbnzdnf"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"sdknbkd sfnd sfbnzdnf"}
          </p>
          <p>
            <b>Phone</b>
            {4772637555343}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"09/07/1996"}
          </p>
          <p>
            <b>Delivered At</b>
            {"09/07/1996"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference no.</b>
            {"09/07/1996"}
          </p>
          <p>
            <b>Paid At</b>
            {"09/07/1996"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{5000}
          </p>
          <p>
            <b>Shipping Charges</b>₹{5000}
          </p>
          <p>
            <b>Tax Applied</b>₹{5000}
          </p>
          <p>
            <b>Total Amount</b>₹{5000}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{12}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
            <div style={{ fontWeight: 800 }}>₹{5000}</div>
          </div>
        </article>
      </main>
    </section>
  );
}
