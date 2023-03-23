import React from "react";
import grid from '../grid .png';  

function Main() {
    return(
       <section className="hero">
           <img src = {grid} className = "hero--photo" alt='Our logo'/>  
           <h1 className="hero--header">Online Experience</h1> 
           <p className="hero--text">Join unique interactive activities led by one-of-a-kind  
            host all without leaing home
           </p>
       </section>   
    )
}

export default Main;

// ctrl + shift + down 