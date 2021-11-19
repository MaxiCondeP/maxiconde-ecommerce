import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";


export const ItemDetailCointainer = () => {

    const [producto, setProducto] = useState();
    
    const {id}=useParams();

    //   //traigo la lista de productos con una promesa, y un delay de 2segundos
    //   const traerLista = (lista) => 
    //   new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //           if (lista) {
    //               resolve(lista);
    //           } else {
    //               reject("No se encontraron productos");
    //           }
    //       }, 2000);
    //   });

      useEffect(() => {
               const db = getFirestore();

    const itemRef = doc(db, "Items", id);
     getDoc(itemRef).then((snapshot) => {
       if (snapshot.exists()) {
         setProducto(snapshot.data());
       }
     });

      }, [id]);


  
     


    return(
        //renderizo el producto obtenido
        <div className="itemDetailContainer">
            {producto
            ?(<ItemDetail producto={producto} key={producto.id}/>
            ):"Cargando..."}
        </div>
    );

}