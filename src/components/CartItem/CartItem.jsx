import "./CartItem.css"

export const CartItem= ({item, removeItem}) =>{


    
    return(
        <div className="cartItem">
            <div className="imgCartItem">
                <img src={item.img} alt="Imagen de producto" />
            </div>
            <div className="DescripCartItem">
                <p>Cód: {item.id}</p>
                <p>{item.titulo}-{item.artista}</p>
                <p>{item.cantidad}x  $ {item.precio}</p>
            </div>
            <button  className="btnEliminar" onClick= {()=>removeItem(item)}>X</button>


        </div>

    );

}

export default CartItem;