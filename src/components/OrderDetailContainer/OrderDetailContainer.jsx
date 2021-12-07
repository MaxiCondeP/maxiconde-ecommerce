import { OrderDetail } from "../OrderDetail/OrderDetail";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";



export const OrderDetailContainer = ({ orderId }) => {
    const [order, setOrder] = useState(undefined);



    useEffect(() => {
        if (order === undefined) {

            const db = getFirestore();
            const itemRef = doc(db, "orders", orderId);
            getDoc(itemRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const newDoc = { ...snapshot.data(), id: orderId };
                    setOrder(newDoc);
                }

            });

            console.log(orderId)
        }
        console.log(order);

    }, [orderId, order]);




    //parseo la fecha de la  orden a string
    const saveDate = (fecha) => {
        if (fecha !== undefined) {

            let d = fecha.getDate();
            let m = fecha.getMonth() + 1;
            let y = fecha.getFullYear();
            let h = fecha.getHours();
            let min = fecha.getMinutes();
            let fechaString = d + "/" + m + "/" + y + ", " + h + ":" + min + "hs.";
            return fechaString;
        }
    }





    return (
        <>
            {order ?
                (<OrderDetail id={order.id} items={order.items} buyer={order.buyer} total={order.total} date={order.date} parseDate={saveDate} />)
                : <p>No hay orden generada</p>}
        </>
    );
}