import { useCart } from "../../contexts/cartContext";
import { CartForm } from "../CartForm/CartForm";
import { getFirestore, collection, addDoc, doc,updateDoc } from "@firebase/firestore";
import { useState } from "react";
import { OrderDetailContainer } from "../OrderDetailContainer/OrderDetailContainer";
import "./CartFormContainer.css"


export const CartFormContainer = () => {

    const { cart, totalCart, clear} = useCart();
    const [sent, setSent]=useState(false);
    const[orderId, setOrderId]=useState();
  
    ////creo el objeto que costumer, que voy a almacenar en el context, a traves del al funcion saveCostumer


    ///actualizo stock en items de db
    const updateDB=()=>{

        ///recorro el cart y con cada elemento cargado le modifico el stock en la base
        const db = getFirestore();
        for (let i = 0; i < cart.length; i++) {
            const orderDoc = doc(db, "Items", cart[i].id);
            updateDoc(orderDoc, { stock: cart[i].stock });
        }


    }


    ///guardo la orden en la db
    const sendOrder = (name, phone, email) => {
        //creo objeto buyer
        const newCostumer = {
            name: name,
            phone: phone,
            email: email
        }

        //creo el objeto odren
        const order = {
            buyer: newCostumer,
            date: new Date(),
            items: cart,
            total: totalCart
        };

        // //traigo la db
         const db = getFirestore();
         //traigo la coleccion
         const ordersCollection = collection(db, "orders");
         //agrego el objeto a la colección
         addDoc(ordersCollection, order)
         .then(function(docRef) {
            setOrderId(docRef.id);
            setSent(true);
            updateDB();
         });
        clear();

    }




    return (
        
        <div className="cartFormContainer">
            
            {sent ?
                <>
                 <h1>Orden finalizada! Gracias por tu compra</h1> 
                 <OrderDetailContainer orderId={orderId}/> 
                 </>:
                 (<> <h2>Completá los datos de la orden: </h2> <CartForm sendOrder={sendOrder} cart={cart} /></>)}
        </div>
    );


}
