import React, { useState } from "react";
import "./ItemCount.css";


export const ItemCount = ({ stock, initial, onAdd}) => {

    //Parseo el initial a int, porque sino lo toma como string
    const [counter, setCounter] = useState(parseInt(initial));


    //valido que sea menor a stock para sumar   
    const onIncrement = () => { if (counter < stock) setCounter(counter + 1); }

    //valido que el nro no sea menor a uno, ya que no se puede comprar menos de un producto
    const onRemove = () => { if (counter > 1) setCounter(counter - 1); }

    return (
        <div className="countContainer">
            <div className="countBottom">
                <button onClick={onRemove}>-</button>
                <span>{counter}</span>
                <button onClick={onIncrement}>+</button>
            </div>
            <button onClick={()=>onAdd(counter)}>Agregar al carrito</button>
        </div>
    );

}

export default ItemCount;
