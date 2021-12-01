import { useCart } from "../../contexts/cartContext";
import {CartItem} from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./CartModal.css"

export const CartModal=({letVisible}) =>{
    const {cart, removeItem, addItem}=useCart();
  




    return(
        <div className="modalContainer">

        {cart.length?
        cart.map((producto) => (
                    <CartItem item={producto} key={producto.id} removeItem={removeItem} addItem={addItem}/>
                )) : "Cargando..."}

        <Link to="/cart">
            <button onClick={()=>letVisible()}>Ir al carrito</button>
        </Link>
        </div>
    );

}