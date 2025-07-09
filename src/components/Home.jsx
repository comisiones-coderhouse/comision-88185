import { Link } from "react-router-dom"

export function Home() {

    const productos = [
        { id: 1, nombre: "Producto 1" },
        { id: 2, nombre: "Producto 2" },
        { id: 3, nombre: "Producto 3" }
    ]

    return (
        <div>
            {productos.map((producto, indice) => {
                return (
                    <div key={indice}>
                        {producto.nombre}
                        <Link to={`/producto/${producto.id}`}>ver detalle</Link>
                    </div>
                )
            })}
        </div>
    )
}