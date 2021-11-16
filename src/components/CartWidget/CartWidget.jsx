import cart from './cart.svg' ;
import './CartWidget.css'
import { useCart } from '../../contexts/cartContext';

export const CartWidget= () =>{

    const{cartCounter}= useCart();


    if(cartCounter){
        return(
            <div className="iconoCartContainer">
                <img className="iconoCart" src= {cart} alt="Ícono carrito"/>
                <p className="textCart">{cartCounter}</p>
            
            </div>
        )

    }else{
        return(
            <div></div>
        )
    }
    

}

export default CartWidget;




