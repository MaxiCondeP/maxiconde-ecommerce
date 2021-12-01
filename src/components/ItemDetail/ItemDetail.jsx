import React, { useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

export const ItemDetail = ({ producto }) => {
    const { addItem } = useCart();


    //Logica de ItemCount 

    //el minimo del contador va a ser siempre 1
    const [cantidad, setCantidad] = useState(1);
    const [isOnCart, setIsOnCart] = useState(false);

    //Función que luego almacenará la cantidad requerida de cada item
    const onAdd = (item, counter) => {
        setCantidad(counter);
        setIsOnCart(true);
        addItem(item, cantidad);
    }

    //valido que sea menor a stock para sumar   
    const onIncrement = ({ cantidad, item }) => { if (cantidad < item.stock) setCantidad(cantidad + 1); }

    //valido que el nro no sea menor a uno, ya que no se puede comprar menos de un producto
    const onRemove = ({ cantidad}) => { if (cantidad > 1) setCantidad(cantidad - 1); }



    ////Si no hay stock, renderizo un msj, sino el itemcount para agregar productos
    const ComponenteAgregar=()=>{
        if(producto.stock<1){
            return(
                <h1>SIN STOCK</h1>
            );
            }else{
            return(
                <>
                <ItemCount stock={producto.stock} initial="1" item={producto} cantidad={cantidad} buttonText="Agregar al carrito" onAdd={onAdd} onIncrement={onIncrement} onRemove={onRemove} />
                 </>
            );
        }
    }



    return (
        <div className="itemDetail">
            <div className="itemLeft">
                <img className="fotoItem" src={producto.img} alt="" />
            </div>
            <div className="itemRight">
                <h2 className="itemTitulo">{producto.titulo}</h2>
                <h2 className="itemArtista">{producto.artista}</h2>
                <p className="itemPrecio"> ${producto.precio}</p>
                <p className="txtDescripcion">{producto.descripcion}</p>

                {isOnCart ?
                    <Link to="/cart">
                        <button>Finalizar compra</button>
                    </Link> :<ComponenteAgregar/>
                    }
            </div>
        </div>
    )

}