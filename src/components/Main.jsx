import { Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./ItemListContainer"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { Cart } from "./Cart"


//Inicio del componente
export function Main() {

    //Vista
    return (
        <main className="main">

            <Routes>
                <Route path="/" element={<ItemListContainer />} />

                <Route path="/about" element={<h2>About</h2>} />
                <Route path="/contact" element={<h2>Contact</h2>} />

                <Route path="/producto/:id" element={<ItemDetailContainer />} />

                <Route path="/categoria/:categoria" element={<ItemListContainer />} />

                <Route path="/cart" element={<Cart />} />

            </Routes>
        </main>
    )
}
//Fin del componente
