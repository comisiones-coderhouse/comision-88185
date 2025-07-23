import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { DetalleDeProducto } from "./DetalleDeProducto"
import { Cart } from "./Cart"


//Inicio del componente
export function Main() {

    //Vista
    return (
        <main className="main">
           
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<h2>About</h2>} />
                <Route path="/contact" element={<h2>Contact</h2>} />

                <Route path="/producto/:id" element={<DetalleDeProducto />} />

                <Route path="/categoria/:categoria" element={<h2>Categoria</h2>} />

                <Route path="/cart" element={<Cart />} />

            </Routes>
        </main>
    )
}
//Fin del componente
