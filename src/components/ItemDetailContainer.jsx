import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { CartContext } from "../providers/CartProvider"
import { app } from "../firebaseConfig"
import { collection, getDoc, getFirestore, doc } from "firebase/firestore"
import { ItemDetail } from "./ItemDetail"

export function ItemDetailContainer() {

    const resultado2 = useContext(CartContext)

    const [producto, setProducto] = useState({})
    const resultado = useParams()

    useEffect(() => {
        handleTraerDetalle()
    }, [])


    const handleTraerDetalle = () => {
        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")
        const filtro = doc(productosCollection, resultado.id)

        const elPedido = getDoc(filtro)

        elPedido
            .then((respuesta) => {
                setProducto(respuesta.data())
            })
            .catch(() => {
                console.log("Error al traer el detalle")
            })
    }

    const handleClick = () => {
        resultado2.setCantidad(2)
    }


    return (
        <ItemDetail producto={producto} handleClick={handleClick} />
    )
}