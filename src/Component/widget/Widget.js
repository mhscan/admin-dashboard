import React from "react";
import "./widget.css"

export default function Widget({ imgsrc, name, id }) {
    return <div className="widget">
        <img className="img" src={imgsrc} alt="user" />
        <h3>{name}</h3>
        <p>{id}</p>
    </div>;
}
