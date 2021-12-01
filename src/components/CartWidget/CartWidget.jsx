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


    // if(cartCounter){
    //     return(
           
    //         <div className="iconoCartContainer" onClick={()=>letVisible()}>
                
    //             <img className="iconoCart" src= {cart} alt="Ícono carrito"/>
    //             <p className="textCart">{cartCounter}</p>
                
    //         </div>
           
    //     )

    // }else{
    //     return(
    //         <div></div>
    //     )
    // }

    return(
        <>
        {cartCounter?
        ( <> <div className="iconoCartContainer" onClick={()=>letVisible()}>
                
                <img className="iconoCart" src= {cart} alt="Ícono carrito"/>
                <p className="textCart">{cartCounter}</p>
                
            </div>
             {visible?
                (<CartModal letVisible={letVisible}/> ):<></>}</>): <></>}
           
        </>
    );
    

}

export default CartWidget;




