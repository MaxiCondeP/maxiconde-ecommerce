import cart from './cart.svg' ;
import './CartWidget.css'
import { useCart } from '../../contexts/cartContext';
import { Link } from "react-router-dom";

export const CartWidget= () =>{

    const{cartCounter}= useCart();


    if(cartCounter){
        return(
            <Link to ="/cart">
            <div className="iconoCartContainer">
                
                <img className="iconoCart" src= {cart} alt="Ícono carrito"/>
                <p className="textCart">{cartCounter}</p>
                
            </div>
            </Link>
        )

    }else{
        return(
            <div></div>
        )
    }
    

}

export default CartWidget;




