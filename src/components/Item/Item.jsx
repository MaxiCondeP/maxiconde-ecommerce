import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Item.css";

export const Item = ({producto, children}) => {
    return (
        <div className="itemContainer">
            <div className="itemTop">
                <img src= {producto.img} />
            </div>
            <div className="itemBottom">
                <h2>{producto.titulo}</h2>
                <h3>{producto.artista}</h3>
                <span className="textPrecio">${producto.precio}</span>
                {/* Link a ver detalle de cada producto */}
                <Link to={`/producto/${producto.id}`}>
                <button>Ver detalles</button>
                </Link>
                {children}
            </div>
        </div>
    );

}

export default Item;
