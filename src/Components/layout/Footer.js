import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div>
        <h2>BurgerMan</h2>
        <p>We are trying to give you the best taste possible.</p>
        <br />
        <em>We give attention to genuine feed</em>
        <strong>All right reserved @BurgerMan</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="#">
          <AiFillYoutube />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
}
