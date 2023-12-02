import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // Check if the current route is MainPage
  const isMainPage = location.pathname === "/";

  const footerStyles = {
    background: "#03334F",
    padding: "22px",
    position: isMainPage ? "" : "fixed",
    width: isMainPage ? "" : "100%",
    bottom: "0",
  };

  return (
    <div style={footerStyles} className="displayFlex center">
      <span
        style={{ color: "rgba(255,255,255,.5)", margin: "0 250px 0 400px" }}
      >
        © 2023 Edzorb Law Private Limited
      </span>
      <a href="" className="footerBtn">
        F.A.Q
      </a>
      <a href="" className="footerBtn">
        About us
      </a>
      <a href="" className="footerBtn">
        Career
      </a>
      <a href="https://edzorblaw.com/blog-post" className="footerBtn">
        Blogs
      </a>
      <a href="" className="footerBtn">
        Privacy Policy
      </a>
      <a href="" className="footerBtn">
        Terms & Conditions
      </a>
    </div>
  );
};

export default Footer;