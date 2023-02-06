import React from "react";
import "./Home.css"
import Comparison from "../../Component/Comparison/Comparison";
import Chart from "../../Component/Chart/Chart";

export default function Home() {
  let data = [
    { tittle: "revanue", price: 2472 },
    { tittle: "salse", price: -22 },
    { tittle: "cost", price: 70 }
  ]

  const tabledata = [
    {name: "1", cost: 400},
    {name: "2", cost: 600},
    {name: "3", cost: 500},
    {name: "4", cost: 1200},
    {name: "5", cost: 2500},
    {name: "6", cost: 2800},
    {name: "7", cost: 257},
    {name: "8", cost: 1245},
    {name: "9", cost: 171},
    {name: "10", cost: 1278},
    {name: "11", cost: 5427},
    {name: "12", cost: 4288},
  ];



  return (<div>
    <div className="feacher">
      <Comparison tittle={data[0].tittle} price={data[0].price} ></Comparison>
      <Comparison tittle={data[1].tittle} price={data[1].price} ></Comparison>
      <Comparison tittle={data[2].tittle} price={data[2].price} ></Comparison>
    </div>
    <Chart title={"month salse"} chartdata={tabledata} ></Chart>
    

  </div>);
}
