import React from "react";
import "./chart.css"
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


export default function Chart({ chartdata, title}) {
    return <div className="chart">
        <h3 >vt </h3>
        <ResponsiveContainer width={1000} aspect={4}> 
            <LineChart width={600} height={300} data={chartdata}>
                <Line type="monotone" dataKey="cost" stroke="#000" />
                <CartesianGrid stroke="#555" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </ResponsiveContainer>

    </div>;
}
