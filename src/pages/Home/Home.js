import React from "react";
import "./Home.css"
import Comparison from "../../Component/Comparison/Comparison";

export default function Home() {
  let data = [
    { tittle: "revanue", price: 214 },
    { tittle: "salse", price: -52 },
    { tittle: "cost", price: 32 }
  ]
  
  
  return (<div>
    <div className="feacher">
      <Comparison tittle={data[0].tittle} price={data[0].price} ></Comparison>
      <Comparison tittle={data[1].tittle} price={data[1].price} ></Comparison>
      <Comparison tittle={data[2].tittle} price={data[2].price} ></Comparison>
    </div>

  </div>);
}
