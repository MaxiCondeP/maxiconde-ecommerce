import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'
import { Link } from "react-router-dom";



export const Navbar =() =>{
    return(
        <div className="menuContainer">
            <Link to="/">
             <h2> Vintage Music Store </h2>  
             </Link>
             <ul className="menu">
             <Link to={`/categoria/nacionales`}>
            <li>Nacionales</li>
            </Link>
            <Link to={`/categoria/importados`}>
            <li>Importados</li>
            </Link>
            </ul>  
            <CartWidget/>    
        </div>

    )
}

export default Navbar;