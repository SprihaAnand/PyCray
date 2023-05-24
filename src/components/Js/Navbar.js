import React from "react";
import "../css/Navbar.css";
function Navbar() {
  return (
    <div>
      <div class="nav">
        <input type="checkbox" id="nav-check" />

        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <a href="#/apidocs">API Docs</a>
          <a href="/">About us</a>
          <a href="#/faq">FAQ</a>
          <a href="#/tos">Terms of Service</a>
          <a href="#/getstarted">
            <button className="NavButton">Get Started for Free</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
