import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
//import ProductosServidor from "../../productos.json"
import "./ItemList.css";
import { useParams } from "react-router";

import { getFirestore } from "../../firebase";
import {collection, query, where, getDocs } from "firebase/firestore";



export const ItemList = () => {

    const [productos, setProductos] = useState([]);

    const { categoria } = useParams();



    // //traigo la lista de productos con una promesa, y un delay de 2segundos
    // const traerLista = (lista) =>
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (lista) {
    //                 resolve(lista);
    //             } else {
    //                 reject("No se encontraron productos");
    //             }
    //         }, 2000);
    //     });

    useEffect(() => {
        const db = getFirestore();
        
        let q=query(collection(db, "Items"))

        if(categoria !== undefined){
            q = query(collection(db, "Items"), where("categoria", "==", categoria));
        }

        //const q = query(categoria? (collection(db, "Items")):(collection(db, "Items"),
          //   where("categoria", "==", {categoria})));
        
        getDocs(q).then((snapshot) => {
            setProductos(
                snapshot.docs.map((doc) => {
                    const newDoc = { ...doc.data(), id: doc.id };
                    return newDoc;
                })
              
            );
        });
    }
    , [categoria]);
    ///Traigo la lista, o capturo el posible error mostrando el msj del reject de  la promesa


    //     traerLista(ProductosServidor)
    //         .then((res) =>  setProductos(categoria?res.filter((produ)=> produ.categoria===categoria): res))
    //         .catch((err) => console.log(err));
    // }, [categoria]);




    return (
        <div className="itemList">
            {/* Renderizo los productos desde el json */}
            {productos.length
                ? productos.map((producto) => (
                    <Item producto={producto} key={producto.id} />
                )) : "Cargando..."}

        </div>
    );
}


export default ItemList;