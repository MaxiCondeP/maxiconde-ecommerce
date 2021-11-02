import React, { useEffect, useState } from "react";
import ProductosServidor from "../../productos.json"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {ItemCount} from "../ItemCount/ItemCount";
import "./ItemDetailContainer.css"


export const ItemDetailCointainer = ({id}) => {

    const [producto, setProducto] = useState([]);

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
              .then((res) =>  setProducto(res.filter((produ)=> produ.id===id))) //filto para que solo muestre el id pasado por param
              .catch((err) => console.log(err));
      }, []);


      //Logica de ItemCount que paso como children a cada Item
      const[cantidad, setCantidad]=useState(0);
      //Función que luego almacenará la cantidad requerida de cada item
      const onAdd=(counter)=>{
          setCantidad(counter);
          console.log(counter);
      }

     


    return(
        //renderizo el producto obtenido
        <div className="itemDetailContainer">
            {producto.length
            ?producto.map((prod)=>(
                <ItemDetail producto={prod} key={prod.id} children={<ItemCount stock={prod.stock} initial="1" onAdd={onAdd}/>}/>
            )):"Cargando..."}
        </div>
    );

}