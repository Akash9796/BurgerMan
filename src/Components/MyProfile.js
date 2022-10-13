import React from "react";
import "../styles/myprofile.scss";
import { motion } from "framer-motion";
import me from "../assests/founder.webp";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

export default function MyProfile({ isAuthenticated }) {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  // console.log(!isAuthenticated)
  return (
    <section className="myProfile">
      <main>
        <motion.img src={me} alt="User" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.3 }}>
          Akash
        </motion.h5>
        <motion.div {...options} transition={{ delay: 0.5 }}>
          <Link
            to="/admin/dashboard"
            style={{
              boardRadius: 0,
              backgroundColor: "rgb(40,40,40)",
              display: "flex",
            }}
          >
            <MdDashboard />
            Dashboard
          </Link>
        </motion.div>
        <motion.div {...options} transition={{ delay: 0.8 }}>
          <Link to="/myorders">My Orders</Link>
        </motion.div>
        <motion.button
          {...options}
          transition={{ delay: 1 }}
          onClick={()=>(
            // isAuthenticated?isAuthenticated=false:isAuthenticated=true
            console.log(isAuthenticated?isAuthenticated=false:isAuthenticated=true)
            )}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
}
