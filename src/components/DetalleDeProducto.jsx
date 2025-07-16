import { Plus } from "lucide-react"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../providers/CartProvider"

export function DetalleDeProducto() {

    const resultado = useParams()
    const resultado2 = useContext(CartContext)


    const handleClick = () => {
        resultado2.setCantidad(2)
    }


    return (
        <div>
            <h2>Detalle del producto {resultado.id}</h2>
            <p>$100</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit provident ipsam sunt, rem officiis quis modi voluptatem facilis, doloremque eaque at dicta voluptatum delectus nisi itaque, recusandae id assumenda.</p>
            <button onClick={handleClick}>
                <Plus />
                Agregar al carrito
            </button>
        </div>
    )
}