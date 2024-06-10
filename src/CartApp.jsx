import { useItemCart } from "./hooks/useItemsCart";
import { Navbar } from "./components/Navbar";
import  { CartRoutes } from "./routes/CartRoutes";


export const CartApp = () => {


    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemCart();

    return (
        <>
           <Navbar />
            <div className="container my-4"> 

                <h3>Cart App</h3>
               <CartRoutes cartItems={cartItems} handlerAddProductCart={handlerAddProductCart} handlerDeleteProductCart={handlerDeleteProductCart} />

            </div>
        </>
    )
}

