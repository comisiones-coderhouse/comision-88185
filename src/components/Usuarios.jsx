import { useState, useEffect } from "react"



export function Usuarios() {

    //Logica
    const [estado, setEstado] = useState([])


    //Efectos
    //useEffect(a,b)
    //useEffect(()=>{},[])
    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((respuesta) => { return respuesta.json() })
            .then((usuarios) => {
                setEstado(usuarios)
            })

    }, [])


    
    //Funciones



    //Vista
    return (
        <div>
            {JSON.stringify(estado)}
        </div>
    )
}