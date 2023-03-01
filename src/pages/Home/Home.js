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
    { name: "1", cost: 400 },
    { name: "2", cost: 600 },
    { name: "3", cost: 500 },
    { name: "4", cost: 1200 },
    { name: "5", cost: 2500 },
    { name: "6", cost: 2800 },
    { name: "7", cost: 1157 },
    { name: "8", cost: 1245 },
    { name: "9", cost: 1701 },
    { name: "10", cost: 1278 },
    { name: "11", cost: 5427 },
    { name: "12", cost: 4288 },
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
