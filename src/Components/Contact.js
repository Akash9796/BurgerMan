import React from "react";
import { motion } from "framer-motion";
import "../styles/contact.scss";
import burger from "../assests/burger2.png";

export default function Contact() {
  const options = {
    1: {
      initial: {
        x: "-100vw",
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.2,
      },
    },
    2: {
      initial: {
        x: "100vw",
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.2,
      },
    },
    3: {
      initial: {
        y: "-100vh",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <section className="contact">
      <motion.form {...options[1]}>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message..." cols="30"></textarea>
        <button type="submit">Send</button>
      </motion.form>
      <motion.div {...options[2]} className="formBorder">
        <div>
          <motion.img {...options[3]} src={burger} alt="" />
        </div>
      </motion.div>
    </section>
  );
}
