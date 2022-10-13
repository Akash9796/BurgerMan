import React from "react";
import { motion } from "framer-motion";
export default function MenuCard({
  item,
  itemNum,
  burgerSrc,
  price,
  title,
  handler,
  restaurant,
  delay = 0,
}) {
  const options = {
    1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
      transition: {
        delay
      },
    },
    2: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <motion.div {...options[1]} className="menuCard">
      <div>Item {itemNum+1}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <motion.h5
          {...options[2]}
          transition={{
            delay: 0.2,
          }}
        >
          ₹ {price}
        </motion.h5>
        <p>{title}</p>
        <b>From Shop {restaurant}</b>

        <button onClick={() => handler(item)}>Buy Now</button>
      </main>
    </motion.div>
  );
}
