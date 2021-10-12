import React from "react";
import './Navbar.css'



export const Navbar =()=>{
    return(
        <div className="menuContainer">
             <h2> Titulo </h2>  
             <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Contacto</a></li>
            </ul>      
        </div>

    )
}