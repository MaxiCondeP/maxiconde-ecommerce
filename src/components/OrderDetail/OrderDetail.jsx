import "./OrderDetail.css"

export const OrderDetail=({items, buyer, date,total, parseDate})=>{
    
 

    return(
        <>
        {items.length?

        (<div className="orderDetailContainer">
            
            <div className="detailHeader">
                <div className="buyerDetail">
                    <p>Datos del comprador: </p>
                    <p>-{buyer.name}</p>
                    <p>-{buyer.phone}</p>
                    <p>-{buyer.email}</p>
                </div>
                {/* Posiblemente pase a ser un logo */}
                <div className="rightHeader">
                <p>{parseDate(date.toDate())}</p>
                <h1>VINTAGE MUSIC STORE</h1>
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