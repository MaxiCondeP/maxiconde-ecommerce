import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
//import ProductosServidor from "../../productos.json"
import "./ItemList.css";
import { useParams } from "react-router";

import { getFirestore } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";



export const ItemList = () => {

    const [productos, setProductos] = useState([]);

    const { categoria } = useParams();





    useEffect(() => {
        const db = getFirestore();

        let q = query(collection(db, "Items"))

        if (categoria !== undefined) {
            q = query(collection(db, "Items"), where("categoria", "==", categoria));
        }



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
 



    return (
        <>
            <h2 className="tituloCategoria">{categoria}</h2>
            <div className="itemList">

                {/* Renderizo los productos desde el json */}
                {productos.length
                    ? productos.map((producto) => (
                        <Item producto={producto} key={producto.id} />
                    )) : "Cargando..."}

            </div>
        </>
    );
}


export default ItemList;