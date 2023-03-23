import React from "react";
import model from '../Images/model .png';
import interstar from '../Images/interstar.png';

const date = new Date();
// const secondName = "Willian";

function Card(what){
    return(
        <div className="card">
          <img src = {what.img} className = "card--image" alt='Our logo'/>      
          <div className="card--stats">
          <img src = {interstar} className = "card--star" alt=''/> 
          <span>5.0</span>
          <span className="gray">(6) </span>
          <span className="gray">{what.name}</span>
          </div>
          <p>{what.life}</p>
          <p><b>From $136</b> / Person</p> 

          <h1>It is currently about {date.getHours() % 12}</h1>      
        </div>
    )
}

export default Card; 