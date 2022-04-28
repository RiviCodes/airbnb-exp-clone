import React from "react";
import "../styles/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img className="card--star" src="../images/star-on.png" />
        <span>{props.rating}</span>
        <span className="grey">{`(${props.reviewCount}) • ${props.country}`}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="p-bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
