import "./ItemCount.css";


export const ItemCount = ({item, stock, cantidad, initial, onAdd,onIncrement, onRemove}) => {




    // //valido que sea menor a stock para sumar   
    // const onIncrement = () => { if (counter < stock) setCounter(counter + 1); }

    // //valido que el nro no sea menor a uno, ya que no se puede comprar menos de un producto
    // const onRemove = () => { if (counter > 1) setCounter(counter - 1); }

    return (
        <div className="countContainer">
            <div className="countBottom">
                <button onClick={()=>onRemove({cantidad,stock})}>-</button>
                <span>{cantidad}</span>
                <button onClick={()=>onIncrement({cantidad,stock})}>+</button>
            </div>
            <button className="counterButton" onClick={()=>onAdd({item, cantidad})}>Agregar al carrito</button>
        </div>
    );

}

export default ItemCount;
