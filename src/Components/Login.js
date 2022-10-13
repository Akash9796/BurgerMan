import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import "../styles/login.scss"

export default function Login() {
  const options = {
    initial: {
      y: "-100vh",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="login">
      <motion.button {...options}>
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
}
