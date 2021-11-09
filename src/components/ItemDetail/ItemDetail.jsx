import React, { useState } from "react";
import "./ItemDetail.css";
import {ItemCount} from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export  const ItemDetail =({producto})=>{

        //Logica de ItemCount 
        const[cantidad, setCantidad]=useState(0);
        const[isOnCart, setIsOnCart]=useState(false);
        //Función que luego almacenará la cantidad requerida de cada item
        const onAdd=(counter)=>{
            setCantidad(counter);
            setIsOnCart(true);
        }
  

    return(
        <div className="itemDetail">
            <div className="itemLeft">
                <img className="fotoItem" src= {producto.img} alt="" />
            </div>
            <div className="itemRight">
                <h2 className="itemTitulo">{producto.titulo}</h2>
                 <h2 className="itemArtista">{producto.artista}</h2>
                <p className="itemPrecio"> ${producto.precio}</p>
                <p className="txtDescripcion">{producto.descripcion}</p>
                
                {isOnCart?
                    <Link to="/cart">
                    <button>Finalizar compra</button>
                    </Link>:
                    <ItemCount stock={producto.stock} initial="1" onAdd={onAdd}/> }
            </div>
        </div>
    )

} 