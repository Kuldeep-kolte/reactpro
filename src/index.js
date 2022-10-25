import React from "react";
import ReactDOM from "react-dom/client";
import { Footer,Herosec } from "./footer";
import './index.css';
import Product from "./Product";
import { data } from './data';
const internalcss = {
  textAlign:"center",
  backgroundColor : "gray"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* props */}
  <Footer name = "Ram"></Footer> 
  <h1 style={internalcss} className="hello">🔥 hello 🔥</h1>
  <h2>hello</h2>
  <Herosec/>
  {/* Passing data using props */}
  <Product data = {data}/>
  </>
  
)