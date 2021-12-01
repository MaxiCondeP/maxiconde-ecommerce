import "./ItemCount.css";


export const ItemCount = ({ item,  cantidad, initial, onAdd, onIncrement, onRemove , buttonText}) => {

    // let initialNumber=initial;
    // if(cantidad){
    // initialNumber=cantidad;
    // }


    return (
        <div className="countContainer">
            <div className="countBottom">
                <button onClick={() => onRemove({cantidad})}>-</button>
                <span>{cantidad}</span>
                <button onClick={() => onIncrement({ cantidad, item })}>+</button>
            </div>
            <button className="counterButton" onClick={() => onAdd({ item, cantidad })}>{buttonText}</button>
            <p>Stock: {item.stock}</p>
        </div>
    );

}

export default ItemCount;
