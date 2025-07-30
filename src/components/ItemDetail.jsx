import { Plus } from "lucide-react";
import { ItemCount } from "./ItemCount";

export function ItemDetail({ producto, handleClick }) {

    return (
        <section className="producto-detalle">
            <h2>Detalle del producto {producto.nombre}</h2>
            <p>{Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS"
            }).format(producto.precio)}</p>
            <p>{producto.stock} {producto.stock > 1 ? "unidades" : "unidad"}</p>
            <p>{producto.descripcion}</p>
            <ItemCount />
            <button onClick={handleClick}>
                <Plus />
                Agregar al carrito
            </button>
        </section>
    )
}
