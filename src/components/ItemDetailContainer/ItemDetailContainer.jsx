import React, { useEffect, useState } from "react";
import ProductosServidor from "../../productos.json"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router";


export const ItemDetailCointainer = () => {

    const [producto, setProducto] = useState();
    
    const {id}=useParams();

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

      useEffect(() => {
///Traigo la lista, o capturo el posible error mostrando el msj del reject de  la promesa
          traerLista(ProductosServidor)
              //.then((res) =>  setProducto(res.filter((produ)=> produ.id===id))) //filto para que solo muestre el id pasado por param
              .then((res) =>  setProducto(res.find((produ)=> produ.id === id)))
              .catch((err) => console.log(err));
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