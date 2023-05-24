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
          <a href="/PyCray/#/apidocs">API Docs</a>
          <a href="/">About us</a>
          <a href="/PyCray/#/faq">FAQ</a>
          <a href="/PyCray/#/tos">Terms of Service</a>
          <a href="/PyCray/#/getstarted">
            <button className="NavButton">Get Started for Free</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
