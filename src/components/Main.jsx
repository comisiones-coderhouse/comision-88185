import { useState } from "react"
import { Formulario } from "./Formulario"
import { Usuarios } from "./Usuarios"




//Destructuing :

const nombres = ["Juan", "Maria", "Pedro"]
/* const nombre1 = nombres[0]
const nombre2 = nombres[1]
const nombre3 = nombres[2] */


//const [var1, .... , varN] = array
const [nombre1, nombre2, nombre3] = nombres






//Inicio del componente
export function Main({ items, children }) {

    //Logica
    //const [a,setA] = useState(valorInicial)
    const [estado, setEstado] = useState("Hola")

    //const resultadoDelHook = useState("Hola") //["Hola",fn(){}]
    //const miEstado = resultadoDelHook[0] //"Hola"
    //const fnParaActualizarElEstado = resultadoDelHook[1] //fn(){}



    //Funciones
    const handleClick = () => {
        setEstado("Otro Texto")
    }




    //Vista
    return (
        <main>
            {/* <h2>{estado}</h2>

            <button onClick={handleClick}>click</button> */}

            {/* <button onClick={() => { console.log("click2") }}>click</button> */}


            {children}
            {/* {items.map((item, indice) => {
                return <div key={indice}>{item}</div>
            })} */}

            {/* <Formulario /> */}
            <Usuarios />
        </main>
    )
}
//Fin del componente
