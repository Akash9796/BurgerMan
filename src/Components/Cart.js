import React, { useState } from "react";
import {
  increaseCount,
  decreaseCount,
  remove,
  calculate,
} from "../redux/Slices/cartSlice";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import burger1 from "../assests/burger1.png";
import burger2 from "../assests/burger2.png";
import burger3 from "../assests/burger3.png";
import "../styles/cart.scss";

export default function Cart() {
  const dispatch = useDispatch();

  const { subTotal, tax, shippingCharges, total } = useSelector(
    (state) => state.cart
  );

  const products = useSelector((state) => state.cart.cartItems);
  console.log(products);

  const CartItem = ({ value, title, img, increment, decrement }) => (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
  const [num, setNum] = useState(1);
  const increment = (i) => {
    dispatch(increaseCount(i));
    dispatch(calculate());
  };

  const decrement = (i) => {
    i.cartQuantity > 1 ? dispatch(decreaseCount(i)) : dispatch(remove(i));
    dispatch(calculate());

  };

  return (
    <section className="cart">
      <main>
        {products?.map((i) => (
          <CartItem
            key={i.id}
            title={i.name}
            img={burger1}
            value={i.cartQuantity}
            increment={() => increment(i)}
            decrement={() => decrement(i)}
          />
        ))}

        <article>
          <div>
            <h4>Sub Total</h4>
            {/* <p>₹{2000}</p> */}
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            {/* <p>₹{2000 * 0.18}</p> */}
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Chargers</h4>
            {/* <p>₹{200}</p> */}
            <p>₹{total == 200 ? 0 : shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            {/* <p>₹{2000 * 1.18 + 200}</p> */}
            <p>₹{total == 200 ? 0 : total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
}
