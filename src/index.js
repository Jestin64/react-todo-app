import React from "react";
import  ReactDom from "react-dom";
import App from "./components/App.js";



const dom_comp = document.querySelector("#root");
ReactDom.render(
  <App/>,
  dom_comp
);