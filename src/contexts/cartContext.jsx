import { createContext, useContext, useEffect, useState } from "react";


const cartContext = createContext();

export const useCart = () => useContext(cartContext);


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const[total, setTotal]= useState(0);
    console.log(cart);


///uso el use effect, con el state de total, para que me lo actualice en cada modificacion, y ademas
/// me actualiza todo el cart ante cualquier modificación.

    useEffect(()=>{
        let tot = 0;
        for (let i = 0; i < cart.length; i++) {
            tot += cart[i].monto;
        }

        setTotal(tot);
        
    },[cart]);

    ///funcion que agrega item al carrito, o suma cantidad en caso de existir
    const addItem = ({ item, cantidad }) => {

        ///valido si existe en array, y trigo el índice.
        const index = cart.findIndex(prod => prod.id === item.id);
        const monto=item.precio * cantidad;   

        // //si no existe lo agrego
        if (index === -1) {
            //creo el obrjeto a agregar 
                //calculo el monto del item         
            const nuevoItem = { ...item, 
                stock : parseInt(item.stock)-cantidad,
                cantidad: cantidad, 
                monto: monto }
            item.stock=item.stock-cantidad;
            setCart([...cart, nuevoItem]);
            setTotal(totalCart());
        } else {
            //si existe lo reemplazo sumandole la cantidad, y el nuevo monto
            ///genero un carrito temporal, al que le reemplazo el elemento a modificar
            const cartModificado = cart;
            cartModificado[index].cantidad = cartModificado[index].cantidad + cantidad;
            cartModificado[index].monto = cartModificado[index].monto + monto;
            item.stock=item.stock-cantidad;
            setCart(cartModificado);
            setTotal(totalCart());
        }
        console.log(`Agregaste el item ${item.id} quedan ${item.stock} `)


    }

    ///remueve item de carrito
    const removeItem = (item) => {
        ///busco el indice donde el id coincida con el del param, y lo elimino
        const index = cart.findIndex(prod => prod.id === item.id);
        if (index !== -1) {
            ///genero un carrito temporal, al que le elimino el valor seleccionado
            const cartModificado = cart;
            cartModificado.splice(index, 1);
            item.stock=5;
            setCart(cartModificado);
            setTotal(totalCart());
        }
        console.log(`Eliminaste el item ${item.id} quedan ${item.stock}`);
            
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

    

    ///cuento la cantidad de elementos del carrito
    const cartCounter=()=>{
        let cant = 0;
        for (let i = 0; i < cart.length; i++) {
            cant += cart[i].cantidad;
        }
        return cant;

    }


    ///sumo el total del carrito
    const totalCart=()=>{
        let tot = 0;
        for (let i = 0; i < cart.length; i++) {
            tot += cart[i].monto;
        }

        return(tot);
    }






    return (
        <cartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartLength: cart.length , cartCounter: cartCounter(), totalCart: total}}>
            {children}


        </cartContext.Provider>

    );
}





