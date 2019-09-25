import React from "react";

function ContactCard(props) {
  // console.log(props);
  return (
    <div className="contact-card">
        <img src={props.imgUrl}/>
        <h3>{props.name}</h3>
        <p>credits: {props.credits}</p>
    </div>
  );
}

export default ContactCard;
