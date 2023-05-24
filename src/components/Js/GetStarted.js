import React from "react";
import "../css/GetStarted.css";
function GetStarted() {
  return (
    <div className="get_started">
      <form id="form" className="topBefore">
        <input id="name" type="text" placeholder="NAME" />
        <input id="email" type="text" placeholder="E-MAIL" />
        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
        <input id="submit" type="submit" value="Start" />
      </form>
    </div>
  );
}

export default GetStarted;
