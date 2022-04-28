import React from "react";
import "../styles/Card.css";

export default function Card(props) {
  /* Determines if the bagde should render & the text inside it */
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.isOnline === true) {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.item.img}`} className="card--image" />
      <div className="card--stats">
        <img className="card--star" src="../images/star-on.png" />
        <span>{props.item.rating}</span>
        <span className="grey">{`(${props.item.reviewCount}) • ${props.item.country}`}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="p-bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
