import React from "react";
// import me from "../assests/founder.webp";
import me from "../assests/Akash.jpg";

import "../styles/founder.scss";
import { motion } from "framer-motion";

export default function Founder() {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Akash Shukla</h3>
        <p>Hey, Everyone I am Akash Shukla, the founder of Burger Man</p>
        <br />
        Our aim is to make the most tasty burger in the Universe. We even get
        reviews from aliens from far far away.
      </motion.div>
    </section>
  );
}
