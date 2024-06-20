import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Email: pramudita.helmi@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/helmi-pramudita/">Connect</a>
        </p>
        <p>
          Whatsapp: <a href="https://wa.me/6289698027602">Contact Us</a>
        </p>
      </div>
      <div className="watermark">
        <p>Created by: Helmi Pramudita</p>
        <p>Source: Wikipedia</p>
      </div>
    </footer>
  );
};

export default Footer;
