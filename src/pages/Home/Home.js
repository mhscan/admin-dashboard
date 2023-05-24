import React from "react";
import "./Home.css";
import Comparison from "../../Component/Comparison/Comparison";
import Chart from "../../Component/Chart/Chart";
import Widget from "../../Component/widget/Widget";

export default function Home() {
  let data = [
    { tittle: "revanue", price: 2472 },
    { tittle: "salse", price: -22 },
    { tittle: "cost", price: 70 },
  ];

  const tabledata = [
    { name: "0", cost: 0 },
    { name: "5", cost: 5.51 },
    { name: "10", cost: 7.14 },
    { name: "15", cost: 8.54 },
    { name: "20", cost: 9.29 },
    { name: "25", cost: 9.70 },
    { name: "30", cost: 9.99 },
    { name: "35", cost: 10.16 },

  ];

  let onlineuser = [
    { imgsrc: "images/u2.jpg", name: "ali", userid: 12548 },
    { imgsrc: "images/u1.jpg", name: "reza", userid: 12548 },
    { imgsrc: "images/u2.jpg", name: "reza", userid: 12548 },
    { imgsrc: "images/u1.jpg", name: "mohammad", userid: 12548 },
    { imgsrc: "images/u3.jpg", name: "reza", userid: 12548 },
  ];

  return (
    <div>
      <div className="flex">
        <Comparison tittle={data[0].tittle} price={data[0].price}></Comparison>
        <Comparison tittle={data[1].tittle} price={data[1].price}></Comparison>
        <Comparison tittle={data[2].tittle} price={data[2].price}></Comparison>
      </div>
      <Chart title={"month salse"} chartdata={tabledata}></Chart>

      <div className="widgetcontaner">
        <div>
          <h3>online user</h3>
          {onlineuser.map((user) => (
            <Widget
              imgsrc={user.imgsrc}
              name={user.name}
              id={user.userid}></Widget>
          ))}
        </div>

        <div>
          <h3>new user</h3>
          {onlineuser.map((user) => (
            <Widget
              imgsrc={user.imgsrc}
              name={user.name}
              id={user.userid}></Widget>
          ))}
        </div>
      </div>
    </div>
  );
}
