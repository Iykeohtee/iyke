import React from "react";
import logo from '../logo.svg';
// import one from '../one.png';  

function Navbar() {
    return(
        <nav>
          <img src = {logo} alt='Our logo' width= {70}/>
          <h1>React</h1>  
        </nav>
    )
}

export default Navbar;