import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'



export const Navbar =() =>{
    return(
        <div className="menuContainer">
             <h2> Vintage Music Store </h2>  
             <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Quiénes somos</a></li>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Contacto</a></li>
            </ul>  
            <CartWidget/>    
        </div>

    )
}

export default Navbar;