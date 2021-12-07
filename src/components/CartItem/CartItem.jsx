import "./CartItem.css"
import { ItemCount } from "../ItemCount/ItemCount";
import React, { useState} from "react";




export const CartItem = ({ item, removeItem, addItem}) => {
    const [cantidad, setCantidad] = useState(item.cantidad);
    

  
   

    //valido que sea menor a stock para sumar   
    const onIncrement = ({ item }) => {
        
        if (item.stock> 0){
            setCantidad(cantidad + 1);
            item.stock = item.stock - 1;
        }
    }

    //valido que el nro no sea menor a uno, ya que no se puede comprar menos de un producto
    const onRemove = () => { 
        if (cantidad > 1) {
            setCantidad(cantidad - 1); 
            item.stock = item.stock + 1;
        }
    }

    const onChangeQ=()=>{
        removeItem(item);
        addItem({item, cantidad});
        
       
    }



    return (
        <div className="cartItem">
            <div className="imgCartItem">
                <img src={item.img} alt="Imagen de producto" />
            </div>
            <div className="DescripCartItem">
                <p>Cód: {item.id}</p>
                <p>{item.titulo}-{item.artista}</p>
                <p>{item.cantidad}x  $ {item.precio}</p>
            </div>
            <ItemCount stock={item.stock} initial={item.cantidad} item={item} cantidad={cantidad} buttonText="♻" onIncrement={onIncrement} onRemove={onRemove} onAdd={onChangeQ}/>
            <button className="btnEliminar" onClick={() => removeItem(item)}>X</button>


        </div>

    );

}

export default CartItem;