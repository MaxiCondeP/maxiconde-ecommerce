import "./OrderDetail.css"

export const OrderDetail=({id, items, buyer, date,total, parseDate})=>{
    
 

    return(
        <>
        {items.length?

        (<div className="orderDetailContainer">
            
            <div className="detailHeader">
                <div className="buyerDetail">
                    <p>Orden: {id}</p>
                    <p>Datos del comprador: </p>
                    <p>-{buyer.name}</p>
                    <p>-{buyer.phone}</p>
                    <p>-{buyer.email}</p>
                </div>
                {/* Posiblemente pase a ser un logo */}
                <div className="rightHeader">
                <p>{parseDate(date.toDate())}</p>
                <img className="logoGris" src="https://i.ibb.co/ZLfSYwp/logo-gray.png" alt="logo" />
                </div>
            </div>
            <div className="orderList">
                
                     {items.map((prod)=>(
                         <div className="orderItem" key={prod.id}>
                         <p>► {prod.cantidad}x {prod.artista} - {prod.titulo}</p>
                         <p>${prod.monto}</p>
                         </div>
                     ))}
                    

            </div>
            <div className="detailFooter">
                <p>Total: ${total}</p>
            </div>

        </div> ):<h2>No hay orden generada.</h2> }

        </>
    );
}