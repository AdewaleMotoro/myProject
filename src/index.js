import React from "react";
import ReactDOM from "react-dom";

const myName = "Adewale";
const currentDate = new Date();

const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1>My name is Adewale Motoro</h1>
    <p>Created by {myName}</p>
    <p>Copyright {year}</p>
  </div>,

  document.getElementById("root")
);
