import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import contStyle from "./SponsorCont.module.scss";
const SponsorCont = () => {
  const form = useRef();
  const [data, setdata] = useState({
    name: "",
    email: "",
    query: "",
  });
  const handleChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current);
    console.log(data);
    emailjs.send("service_imlmxww", "template_dazbaqs", data, "0dLaIvWYVhoSEIJ_A").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setdata({
      name: "",
      email: "",
      query: "",
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
        </div>
      </div>
    </div>
  );
};

export default SponsorCont;
