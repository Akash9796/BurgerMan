import React from "react";
import "../styles/myorders.scss";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
export default function MyOrders() {
  const arr = [1, 2, 3, 4];

  return (
    <section className="myorders">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#sdkkdfbdbd</td>
                <td>#sdkkdfbdbd</td>
                <td>23</td>
                <td>₹ {21312}</td>
                <td>COD</td>
                <td>
                  <Link to={`/order/rsgd`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
}
