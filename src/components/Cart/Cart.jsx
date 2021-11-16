import CartItem from "../CartItem/CartItem";
import { useCart } from "../../contexts/cartContext";
import { Link } from "react-router-dom";
import "./Cart.css";


export const Cart = () => {

    const { cart, cartLength, totalCart, removeItem} = useCart();


  



    const Componente = () => {

        if (cartLength > 0) {
            return (
                <div>
                {cart.map((item) => (
                    <CartItem item={item} key={item.id} removeItem={removeItem}/>))}
                    <h2>Total {totalCart}</h2>
                </div>
                );    
            }
    }



    return (

        ///Si el carrito tiene elementos lo mapeo, sino informo que está vacío, y muestro el boton de volver.
        <div className="cartContainer">
            {cartLength
                ? <Componente/>
                : <div>
                    <h1>Tu carrito está vacío</h1>
                    <Link to="/">
                        <button>Ir a comprar</button>
                    </Link>
                </div>
            }

        </div>



    );
}