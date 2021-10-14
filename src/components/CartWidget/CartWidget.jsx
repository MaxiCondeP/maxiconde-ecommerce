import cart from './cart.svg' ;
import './CartWidget.css'

export const CartWidget= () =>{
    
    return(
        <div className="iconoCartContainer">
            <img className="iconoCart" src= {cart}/>
            <p>0</p>
        
        </div>
    )
}

export default CartWidget;




