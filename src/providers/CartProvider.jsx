import { createContext, useState } from "react";

//1) Esta variable es el contexto
export const CartContext = createContext();

//2) Esta variable es el componente Provider
const CartProvider = CartContext.Provider;


//3) Este es el componente envoltorio
export function CustomCartProvider({
    //5)Este es el children
    children
}) {


    const [cantidad,setCantidad] = useState(0)


    //4)Este es el valor del contexto
    const elValorDelContexto = {
        //cantidad : 0,
        cantidad: cantidad,
        precioTotal: 0,
        carrito: [],
        setCantidad: setCantidad
    }


    //3)Aca se retorna el Provider
    return (
        <CartProvider
            //4)Esta linea es la que le da el valor al contexto
            value={elValorDelContexto}
        >
            {/* 5) */}
            {children}
        </CartProvider>
    )
}
