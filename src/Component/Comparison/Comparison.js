import React from "react";
import "./Comparison.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { display } from "@mui/system";



export default function Comparison({ price, tittle }) {
    let arrow = <ArrowUpwardIcon />
    let classname=`possetive`


    if (price < 0) {
        arrow = <ArrowDownwardIcon />
        classname=`neggetive`
    }
    
    return <div>

        <div className={`comparison ${classname}`}>
            <h2>{tittle}</h2>
            <h1>{price} <span>{arrow}</span></h1>
            
            <p>compared to last month</p>

        </div>

    </div>;
}
