import React from "react";
import './ItemListContainer.css'

export const ItemListContainer = ({message, children}) =>{
    return(
        <div className= "itemContainer">
            <span className="message">{message}</span>
            {children}
        </div>


    );
}

export default ItemListContainer;
