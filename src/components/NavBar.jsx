import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        background: "#032F4A",
        paddingLeft: "450px",
        position: "fixed",
        width: "100%",
      }}
      className="displayFlex center"
    >
      <div>
        <Link to="/">
          <img
            src="https://edzorblaw.com/wp-content/uploads/2023/05/legal-rumble-2-logo.png"
            style={{ wdith: "70px", height: "60px" }}
          />
        </Link>
      </div>
      <Link to="/premium" className="blogsBtn">
        Premium+
      </Link>
      <Link to="/blogs" className="blogsBtn">
        Blogs
      </Link>
      <Link to="/podcast" className="blogsBtn">
        Podcast
      </Link>
      <div style={{ paddingLeft: "450px" }}>
        <button className="loginBtn">Login</button>
        <Link to="/signup">
          <button className="signUpBtn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;