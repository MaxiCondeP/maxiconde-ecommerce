import cart from './cart.svg' ;
import './CartWidget.css'
import { useCart } from '../../contexts/cartContext';
import {CartModal} from "../CartModal/CartModal"
import {useState} from "react";


export const CartWidget= () =>{

    const{cartCounter}= useCart();
    const [visible, setVisible]= useState(false);
    console.log(visible);


    const letVisible=()=>{
        setVisible(!visible);

    }




    return(
        <>
        {cartCounter?
        ( <> <div className="iconoCartContainer" onClick={()=>letVisible()}>
                
                <img className="iconoCart" src= {cart} alt="Ícono carrito"/>
                <div className="textCart">{cartCounter}</div>
               
                
            </div>
             {visible?
                (<CartModal letVisible={letVisible}/> ):<></>}</>): <></>}
           
        </>
    );
    

}

export default CartWidget;




