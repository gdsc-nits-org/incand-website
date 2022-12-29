import React from "react";
import { useState } from "react";
import contStyle from "./SponsorCont.module.scss";
const SponsorCont = () => {
  const formdata = {
    name: "",
    email: "",
    query: "",
  };
  const [data, setdata] = useState(formdata);
  const handleChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
    setdata(formdata);
  };
  return (
    <div className={contStyle.contact}>
      <p>Contact Us</p>
      <div className={contStyle.contactbox}>
        <div className={contStyle.left}>
          <img src="/logos/adver.svg" alt="mdfc" style={{ display: "block" }} />
        </div>
        <div className={contStyle.right}>
          <form>
            <input
              type="text"
              name="name"
              className={contStyle.field}
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className={contStyle.field}
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="query"
              className={contStyle.field}
              placeholder="Query"
              onChange={handleChange}
              required
            />
            <button onClick={handleClick}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SponsorCont;
