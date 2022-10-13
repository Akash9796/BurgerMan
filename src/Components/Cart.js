import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import burger1 from "../assests/burger1.png";
import burger2 from "../assests/burger2.png";
import burger3 from "../assests/burger3.png";
import "../styles/cart.scss";

export default function Cart({ cart }) {
  const dispatch = useDispatch();

  const {
    cartItems: {
      cheeseBurger: { quantity: cheeseBurger },
      vegCheeseBurger: { quantity: vegCheeseBurger },
      burgerwithFries: { quantity: burgerwithFries },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

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
  const increment = (item) => {
    // setNum(num + 1);

    switch (item) {
      case 1:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "BurgerwithFriesIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      default:
        dispatch({ type: "cheeseBurgerIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (cheeseBurger < 1) break;
        dispatch({ type: "cheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (vegCheeseBurger < 1) break;
        dispatch({ type: "vegCheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (burgerwithFries < 0) break;
        dispatch({ type: "BurgerwithFriesDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      default:
        dispatch({ type: "cheeseBurgerDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  return (
    <section className="cart">
      <main>
        {/* {cart.map((i) => (
          <CartItem
            title={i.name}
            img={burger1}
            value={num}
            increment={() => increment(1)}
            decrement={() => decrement(1)}
          />
        ))} */}
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={cheeseBurger}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"veg Cheese Burger"}
          img={burger2}
          value={vegCheeseBurger}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Burger with Fries"}
          img={burger3}
          value={burgerwithFries}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

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
