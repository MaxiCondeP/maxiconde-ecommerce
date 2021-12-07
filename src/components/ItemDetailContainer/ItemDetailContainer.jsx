import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useCart } from "../../contexts/cartContext";


export const ItemDetailCointainer = () => {

  const [producto, setProducto] = useState();
  const [text, setText]=useState("Cargando...");
  const [stock, setStock] = useState();

  const {isInCart}=useCart();

  const { id } = useParams();
 



  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "Items", id);
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        const newDoc = { ...snapshot.data(), id: id };
        setStock(isInCart(id));
        if (stock> -1){
          newDoc.stock= stock;
        }
        setProducto(newDoc);
        setText("Cargando...");
      }else{
        setText("El producto no existe");
      }
      

    });
  }, [id, stock, isInCart]);






  return (
    //renderizo el producto obtenido
    <div className="itemDetailContainer">
      {producto
        ? (<ItemDetail producto={producto} key={producto.id} />
        ) : text}
    </div>
  );

}