import { useState } from "react"

export function ItemCount() {

    const [contador, setContador] = useState(1)
    const stock = 10

    const handleSumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    return (
        <div>
            <button onClick={handleSumar}>+</button>
            <p>{contador}</p>
            <button>-</button>
        </div>
    )
}
