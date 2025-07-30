import { useParams } from "react-router-dom"
import { app } from "../firebaseConfig"
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Item } from "./Item"


export function ItemListContainer() {

    const [productos, setProductos] = useState([])

    //{categoria: 'electronicos'} - {categoria: 'bazar'} - {}
    const resultado = useParams()


    useEffect(() => {
        if (resultado.categoria) {
            //Traer productos por categoria
            handleTraerProductosPorCategoria()
        } else {
            //Traer todos los productos
            handleTraerProductos()
        }
    }, [resultado.categoria])



    const handleTraerProductos = () => {
        console.log("Traer todos los productos")
        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")
        const elPedido = getDocs(productosCollection)

        elPedido
            .then((respuesta) => {
                const productosFinales = []

                respuesta.docs.forEach((producto) => {
                    //console.log(producto.id) "2938hf9238f9028"
                    //productosFinales.push(producto.data()) {nombre : "" , precio : 1, descripcion : ""}

                    const finalProduct = {
                        id: producto.id,
                        ...producto.data()
                    }

                    productosFinales.push(finalProduct)
                })

                setProductos(productosFinales)
            })
            .catch(() => {
                console.log("Error al traer los productos")
            })
    }

    const handleTraerProductosPorCategoria = () => {
        console.log("Traer productos por categoria")
        const db = getFirestore(app)
        const productosCollection = collection(db, "productos")

        const filtro = query(productosCollection, where("categoria", "==", resultado.categoria))

        const elPedido = getDocs(filtro)
        elPedido
            .then((respuesta) => {
                const productosFinales = []

                respuesta.docs.forEach((producto) => {
                    const finalProduct = {
                        id: producto.id,
                        ...producto.data()
                    }

                    productosFinales.push(finalProduct)
                })

                setProductos(productosFinales)
            })
            .catch(() => {
                console.log("Error al traer los productos")
            })
    }

    return (
        <>
            <section className="productos">
                {productos.map((producto, indice) => {
                    return (
                        <Item key={indice} producto={producto} />
                    )
                })}
            </section>

        </>
    )
}