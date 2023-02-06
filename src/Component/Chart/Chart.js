import React from "react";
import "./chart.css"
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export default function Chart({ chartdata, title}) {
    return <div className="chart">
        <h3 >{title} </h3>
        <ResponsiveContainer width={1000} aspect={4}> 
            <LineChart width={600} height={300} data={chartdata}>
                <Line type="monotone" dataKey="cost" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>

    </div>;
}
