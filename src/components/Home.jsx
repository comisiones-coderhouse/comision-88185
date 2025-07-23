import { Link } from "react-router-dom"
import { app } from "../firebaseConfig"
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import { useEffect, useState } from "react"


export function Home() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        handleTraerProductos()
    }, [])
    /* const productos = [
        { id: 1, nombre: "Producto 1" },
        { id: 2, nombre: "Producto 2" },
        { id: 3, nombre: "Producto 3" }
    ] */

    const handleAgregarProducto = () => {
        //Necesito que react se "loguee" en la plataforma de firebase (esto ya esta hecho en el archivo firebaseConfig.js / la variable app)

        //Necesito un acceso(referencia) a la base de datos en si
        const db = getFirestore(app)

        //Necesito un acceso a la colección en cuestión(osea el "lugar" en donde se almacenan los datos)
        const productosCollection = collection(db, "productos")

        //Le hago la consulta de guardar datos
        addDoc(productosCollection, {
            nombre: "Monitor 24 pulgadas",
            precio: 100000,
            descripcion: "Monitor de 24 pulgadas con resolución Full HD",
            stock: 10,
            categoria: "electronicos",
            imagen: "/images/monitor.jpg"
        })
    }

    const handleTraerProductos = () => {
        //Necesito que react se "loguee" en la plataforma de firebase (esto ya esta hecho en el archivo firebaseConfig.js / la variable app)

        //Necesito un acceso(referencia) a la base de datos en si
        const db = getFirestore(app)

        //Necesito un acceso a la colección en cuestión(osea el "lugar" en donde se almacenan los datos)
        const productosCollection = collection(db, "productos")

        //Le hago la consulta de traer datos
        const elPedido = getDocs(productosCollection)

        elPedido
            .then((respuesta) => {
                console.log("Salio todo bien")
                //console.log(respuesta) toda la respuesta del servidor 
                //console.log(respuesta.docs) un array con "referencias" a los datos

                //Aca voy guardando los datos "convertidos" en un array
                const productosFinales = []

                //Recorro la respuesta del servidor y voy guardando los datos en el array
                respuesta.docs.forEach((producto) => {
                    //producto.data() es la conversion de los datos en un objeto JSON
                    productosFinales.push(producto.data())
                })

                console.log(productosFinales)
                //Aca actualizo el estado de los productos asi ya se ven
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
                        <article key={indice} className="producto-card">
                            <h2>
                                {producto.nombre}
                                {Intl.NumberFormat("es-AR", {
                                    style: "currency",
                                    currency: "ARS"
                                }).format(producto.precio)}
                            </h2>
                            <Link to={`/producto/${producto.id}`}>ver detalle</Link>
                        </article>
                    )
                })}
            </section>
            <button onClick={handleAgregarProducto}>Agregar producto</button>
            {/* <button onClick={handleTraerProductos}>Traer productos</button> */}
        </>
    )
}