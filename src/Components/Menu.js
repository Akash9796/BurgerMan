import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/menu.scss";
import {add,calculate} from "../redux/Slices/cartSlice"
import MenuCard from "./MenuCard";
import burger1 from "../assests/burger1.png";
import burger2 from "../assests/burger2.png";
import burger3 from "../assests/burger3.png";
import { useDispatch } from "react-redux";

export default function Menu() {
  const dispatch = useDispatch()
  const options = {
    method: "GET",
    url: "https://burgers1.p.rapidapi.com/burgers",
    headers: {
      "X-RapidAPI-Key": "82a319c1e0msh2b85144e8ad1c9dp19ee2cjsnd06a4ba030b9",
      "X-RapidAPI-Host": "burgers1.p.rapidapi.com",
    },
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const addToCartHandler = (i) => {
    dispatch(add(i));
    dispatch(calculate());
    console.log("Added");
  };

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        {data &&
          data.map((c, i) => (
            <MenuCard
              key={i}
              item={c}
              itemNum={i}
              burgerSrc={burger2}
              price={
                c.addresses[0].number < 10000 && c.addresses[0].number > 10
                  ? c.addresses[0].number
                  : 500
              }
              title={c.name}
              restaurant={c.restaurant}
              handler={addToCartHandler}
              delay={0.1 * i}
            />
          ))}
      </div>
    </section>
  );
}
