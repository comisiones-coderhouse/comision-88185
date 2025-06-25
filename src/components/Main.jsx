import { useState } from "react"



//Inicio del componente
export function Main({ items, children }) {

    //Logica
    //const [variable,setVariable] = useState(valorInicial)
    const [mensaje, setMensaje] = useState("Cargando...")

    console.log("🚀 ~ Main ~ mensaje:", mensaje)


    const handleClick = () => {
        //mensaje = "Otro Texto"
        setMensaje("Otro Texto")
        //console.log(mensaje)
    }


    //Vista
    return (
        <main>
            <h2>{mensaje}</h2>
            <button onClick={handleClick}>click</button>
            {children}
            {items.map((item, indice) => {
                //Lo que se retorna de un mapeo se renderiza (osea, se ve en el navegador) y se le agrega un atributo llamado "key" obligatorio
                return <div key={indice}>{item}</div>
            })}
        </main>
    )
}
//Fin del componente
