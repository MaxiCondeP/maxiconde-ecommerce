
import "./ItemDetail.css";

export  const ItemDetail =({producto, children})=>{

    return(
        <div className="itemDetail">
            <div className="itemLeft">
                <img className="fotoItem" src= {producto.img} alt="" />
            </div>
            <div className="itemRight">
                <h2 className="itemTitulo">{producto.titulo}</h2>
                 <h2 className="itemArtista">{producto.artista}</h2>
                <p className="itemPrecio"> ${producto.precio}</p>
                <p className="txtDescripcion">{producto.descripcion}</p>
                {children}
            </div>
        </div>
    )

} 