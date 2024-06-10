import { useReducer, useState, useEffect } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, UpdateQuantityProductCart, DeleteProductCart } from '../reducer/itemsActions';

const initialCartItems = JSON.parse(localStorage.getItem('cart')) || [];

//Se coemnat por que se ocupa el de arriba loca storage
// const initiallCartItems = [
//     // {
//     //     product: {             
//     //     },
//     //     quantity: 0,
//     //     total: 0
//     // }
// ];


export const useItemCart = () => {

    //const [cartItems, setCartItems] = useState(initialCartItems);

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {           
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])

    const handlerAddProductCart = (product) => {

    //Se esta buscando aqui el item
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    //Si existe el item   
    if(hasItem) {   
        //Actualizando el item
        // setCartItems(
        //     cartItems.map((i) => {
        //         if(i.product.id === product.id){
        //             i.quantity = i.quantity + 1
        //         }
        //         return i;
        //     })
        // )
        //Se reemplaza por el Dispatch
        dispatch(
            {
                type: UpdateQuantityProductCart,
                payload: product
            }
        )
       } else { //Si no existe el item
            // setCartItems([...cartItems,
            //     {   
            //         product,
            //         quantity: 1,                   
            //     }
            // ]);
        dispatch({
                    type: AddProductCart,
                    payload: product
         })
       }
        
    }

    //Funcion para eliminar un producto
    const handlerDeleteProductCart = (id) => {
        // setCartItems([
        //     ...cartItems.filter((i) => i.product.id !== id)
        // ])
        dispatch({
            type: DeleteProductCart,
            payload: id
        })
    }

    return {
        cartItems, 
        handlerAddProductCart, 
        handlerDeleteProductCart
    }


}