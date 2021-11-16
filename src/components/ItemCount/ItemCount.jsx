import "./ItemCount.css";


export const ItemCount = ({ item,  cantidad, initial, onAdd, onIncrement, onRemove }) => {


    return (
        <div className="countContainer">
            <div className="countBottom">
                <button onClick={() => onRemove({cantidad})}>-</button>
                <span>{cantidad}</span>
                <button onClick={() => onIncrement({ cantidad, item })}>+</button>
            </div>
            <button className="counterButton" onClick={() => onAdd({ item, cantidad })}>Agregar al carrito</button>
        </div>
    );

}

export default ItemCount;
