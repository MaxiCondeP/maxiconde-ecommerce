import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import ItemCount from "../ItemCount/ItemCount";
import ProductosServidor from "../../productos.json"
import "./ItemList.css"

export const ItemList = () => {

    const [productos, setProductos] = useState([]);

    //traigo la lista de productos con una promesa, y un delay de 2segundos
    const traerLista = (lista) => 
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (lista) {
                    resolve(lista);
                } else {
                    reject("No se encontraron productos");
                }
            }, 2000);
        });

        useEffect(() => {  ///Traigo la lista, o capturo el posible error mostrando el msj del reject de  la promesa
            traerLista(ProductosServidor)
                .then((res) =>  setProductos(res))
                .catch((err) => console.log(err));
        }, []);
  

//Logica de ItemCount que paso como children a cada Item
        const[cantidad, setCantidad]=useState(0);
    //Función que luego almacenará la cantidad requerida de cada item
    const onAdd=(counter)=>{
        setCantidad(counter);
        console.log(counter);
    }
        

    return (
        <div className="itemList"> 
            {/* Renderizo los productos desde el json */}
            {productos.length
                ? productos.map((producto) => (
                    <Item producto={producto} key={producto.id} children={<ItemCount stock={producto.stock} initial="1" onAdd={onAdd}/>}/>
                )):"Cargando..."}

        </div>
    );
}


export default ItemList;