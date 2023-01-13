import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import contStyle from "./SponsorCont.module.scss";
const SponsorCont = () => {
  const form = useRef();
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    query: "",
  });
  const [querySuccessful, setQuerySuccessful] = useState(0);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await emailjs
      .send("service_75opwm9", "template_rdxye6i", data, "oRWuR17yfPxda0e5L")
      .then(
        () => {
          setQuerySuccessful(1);
        },
        () => {
          setQuerySuccessful(-1);
        }
      );

    setData(() => {
      return {
        name: "",
        number: "",
        email: "",
        query: "",
      };
    });
  };
  return (
    <div className={contStyle.contact}>
      <p>Contact Us</p>
      <div className={contStyle.contactbox}>
        <div className={contStyle.left}>
          <img src="/logos/contactLogo.svg" alt="mdfc" style={{ display: "block" }} />
        </div>
        <div className={contStyle.right}>
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={data.name}
              className={contStyle.field}
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={data.email}
              className={contStyle.field}
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="number"
              value={data.number}
              className={contStyle.field}
              placeholder="Phone Number"
              pattern="^[0-9]{10}$"
              onChange={handleChange}
              required
            />
            <textarea
              type="text"
              name="query"
              value={data.query}
              className={contStyle.field}
              placeholder="Type you Query here...."
              onChange={handleChange}
              required
            />
            <button type="submit">Send</button>
          </form>
          {querySuccessful === 1 && (
            <div className={contStyle.queryStatus}>Query Sent Successfully!</div>
          )}
          {querySuccessful === -1 && (
            <div className={contStyle.queryStatus}>Query Failed to Send!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsorCont;
