import React from "react";
import "../styles/shipping.scss";
import { Country, State } from "country-state-city";
import { Link } from "react-router-dom";

export default function Shipping() {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No</label>
            <input type="text" placeholder="Enter House No." />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option placeholder="Country" value="">
                Country
              </option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City Name" />
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" placeholder="Enter PinCode No." />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="number" placeholder="Enter Phone No." />
          </div>
          <button type="submit">
            <Link to="/confirmOrder">Order Confirm</Link>
          </button>
        </form>
      </main>
    </section>
  );
}
