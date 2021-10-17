import React, { useState } from "react";
import "./ItemCount.css";


export const ItemCount = ({ stock, initial }) => {

    //Parseo el initial a int, porque sino lo toma como string
    const [counter, setCounter] = useState(parseInt(initial));


    //valido que sea menor a stock para sumar   
    const onAdd = () => { if (counter < stock) setCounter(counter + 1); }

    //valido que el nro no sea menor a uno, ya que no se puede comprar menos de un producto
    const onRemove = () => { if (counter > 1) setCounter(counter - 1); }

    return (
        <div className="countContainer">
            <div className="countTop">

            </div>
            <div className="countBottom">
                <button onClick={onAdd}>+</button>
                <span>{counter}</span>
                <button onClick={onRemove}>-</button>
            </div>
            <button>Agregar al carrito</button>

        </div>
    );

}

export default ItemCount;
