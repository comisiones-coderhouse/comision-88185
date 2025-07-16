import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { DetalleDeProducto } from "./DetalleDeProducto"
import { Cart } from "./Cart"


//Inicio del componente
export function Main() {

    //Vista
    return (
        <main className="main">
            {/* <h2>Home</h2>
            }

            {/* if(urlDelNavegador === "/") { return <h2>Home</h2> } */}

            {/* /producto/1 - /producto/2 - /producto/3 : /producto/:id*/}
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<h2>About</h2>} />
                <Route path="/contact" element={<h2>Contact</h2>} />

                <Route path="/producto/:id" element={<DetalleDeProducto />} />

                <Route path="/categoria/:categoria" element={<h2>Categoria</h2>} />

                <Route path="/cart" element={<Cart />} />
                {/* 
                
                <Route path="/1" element={<h2>Contact</h2>} />
                <Route path="/2" element={<h2>Contact</h2>} />
                <Route path="/3" element={<h2>Contact</h2>} /> 
                
                */}


            </Routes>
        </main>
    )
}
//Fin del componente
