import { React, useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css'
import { Link } from "react-router-dom";
import { Dropdown } from "../../Dropdown/Dropdown";




export const Navbar = () => {

    const [dropD, setDropd] = useState(false);
 
    //Al pasar el mouse pongo visible el desplegable
    const mouseDrop = () => {
        setDropd(true);

    }

    //Al correr el mouse dejo de mostrar el desplegable
    const mouseOut = () => {
        setDropd(false);

    }



    return (
        <div className="menuContainer">
            <Link to="/">
                {/* <h2> Vintage Music Store </h2>   */}
                <img className="logoHeader" src="https://i.ibb.co/r3qLXZd/logo.png" alt="Logo" />
            </Link>
            <ul className="menu">
                <Link to="/">
                    <li className="liNavbar">Home</li>
                </Link>
                <li className="liNavbar">Nosotros</li>
                <div className="liNavbar">
                    <div className="liDropdown" onMouseOver={() => mouseDrop()} onMouseLeave={() => mouseOut()}> Categorías {dropD ? <Dropdown /> : <></>} </div>
                </div>
                <li className="liNavbar">Contacto</li>
                <li className="liNavbar"><CartWidget /></li>
                
            </ul>
            
        </div>

    )
}

export default Navbar;