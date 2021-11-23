import { useCart } from "../../contexts/cartContext";
import { CartForm } from "../CartForm/CartForm";

export const CartFormContainer=()=>{

    const {cart, saveCostumer, sendOrder}=useCart();

////creo el objeto que costumer, que voy a almacenar en el context, a traves del al funcion saveCostumer
    const createCostumer=(name, phone, email)=>{
        const newCostumer={"name": name,
            "phone": phone,
            "email": email
        }
        saveCostumer(newCostumer);
    }




    return(
        <CartForm createCostumer={createCostumer} sendOrder={sendOrder} cart={cart} />
    );


}
