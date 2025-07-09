import { useParams } from "react-router-dom"

export function DetalleDeProducto() {

    const resultado = useParams()

    console.log(resultado)

    return (
        <div>Detalle del producto {resultado.id}</div>
    )
}