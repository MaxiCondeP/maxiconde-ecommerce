import React, { useState } from "react";
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
                <button>Ver detalles</button>
                {children}
            </div>
        </div>
    );

}

export default Item;
