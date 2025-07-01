import { useState } from "react"


export function Formulario() {

    //Logica
    const [nombre, setNombre] = useState("")
    const [usuarios, setUsuarios] = useState("")


    //Funciones
    const handleChange = (evt) => {
        //evt === {....., target : {...}}
        //evt.target === <input/>
        //evt.target.value === Lo que escribio el usuario
        setNombre(evt.target.value)
    }


    const handleSubmit = (evt) => {
        evt.preventDefault()
        setUsuarios(usuarios + "," + nombre)
    }



    //Vista
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
            </form>
            <div>
                <h2>Lista de Usuarios</h2>
                {usuarios}
            </div>
        </section>
    )
}