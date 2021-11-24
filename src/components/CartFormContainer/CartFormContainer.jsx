import { useCart } from "../../contexts/cartContext";
import { CartForm } from "../CartForm/CartForm";
import { getFirestore, collection, addDoc } from "@firebase/firestore";
import { useState } from "react";

export const CartFormContainer=()=>{

    const {cart, totalCart, clear}=useCart();
    const [sent, setSent]=useState(false);

////creo el objeto que costumer, que voy a almacenar en el context, a traves del al funcion saveCostumer


        ///guardo la orden en la db
        const sendOrder=(name, phone, email)=>{
            //creo objeto buyer
            const newCostumer={name: name,
            phone: phone,
            email: email
        }

            //creo el objeto odren
            const order={
                buyer: newCostumer,
                items: cart,    
                total: totalCart
            };
    
            //traigo la db
            const db=getFirestore();
            //traigo la coleccion
            const ordersCollection = collection(db, "orders");
            //agrego el objeto a la colección
            addDoc(ordersCollection, order)
            setSent(true);
            clear();

        }




    return(
        <>
       { sent?
        <h1>Orden finalizada! Gracias por tu compra</h1>:
        (<CartForm sendOrder={sendOrder} cart={cart} />)}
        </>
    );


}
