import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../firebaseConfig";

//Componente Hijo
export function CheckoutForm({ onSendForm }) {

    const x = 1;

    const handleClick = () => {
        onSendForm(x)
    }

    const handleCompra = () => {
        const db = getFirestore(app)
        const ventasCollection = collection(db, "ventas")

        //Le hago la consulta de guardar datos
        const elPedido = addDoc(ventasCollection, {
            nombre: "Horacio",
            telefono: "1122334455",
            email: "horacio@gmail.com",
            carrito: []
        })

        elPedido
            .then((respuesta) => {
                console.log(respuesta.id)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" placeholder="Ej : Horacio" />
            </div>
            <div>
                <label htmlFor="telefono">Teléfono</label>
                <input type="text" placeholder="Ej : 1122334455" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Ej : horacio@gmail.com" />
            </div>
            <button onClick={handleCompra}>Agregar producto</button>
        </div>
    )
}