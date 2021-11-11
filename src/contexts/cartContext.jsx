import { createContext, useContext, useState } from "react";


const cartContext = createContext();

export const useCart = () => useContext(cartContext);


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log(cart);



    ///funcion que agrega item al carrito, o suma cantidad en caso de existir
    const addItem = ({ item, cantidad }) => {

        ///valido si existe en array, y trigo el índice.
        const index = cart.findIndex(prod => prod.id === item.id);
        console.log(index)

        // //si no existe lo agrego
        if (index === -1) {
            //creo el obrjeto a agregar 
            const nuevoItem = { ...item, cantidad: cantidad }
            setCart([...cart, nuevoItem]);

        } else {
            //si existe lo reemplazo sumandole la cantidad
            ///genero un carrito temporal, al que le reemplazo el elemento a modificar
            const cartModificado = cart;
            cartModificado[index].cantidad = cartModificado[index].cantidad + cantidad;
            setCart(cartModificado);
        }

    }

    ///remueve item de carrito
    const removeItem = (id) => {
        ///busco el indice donde el id coincida con el del param, y lo elimino
        const index = cart.findIndex(prod => prod.id === id);
        if (index !== -1) {
            ///genero un carrito temporal, al que le elimino el valor seleccionado
            const cartModificado = cart;
            cartModificado.splice(index, 1)
            setCart(cartModificado);
        }
    }


    //limpia el total del carrito
    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        const index = cart.findIndex(prod => prod.id === id);
        if (index !== -1)
            return true;
        else
            return false;
    }


    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartLength: cart.length }}>
            {children}


        </cartContext.Provider>

    );
}





