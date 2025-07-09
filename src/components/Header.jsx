import { Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Search } from "lucide-react";

export function Header({ name, age }) {
    return (
        <header className="header">
            <h1 className="header__title">Bienvenido {name}</h1>

            <Routes>
                <Route path="/" element={
                    <div>
                        <input placeholder="Buscar..." />
                        <button>
                            <Search />
                        </button>
                    </div>
                } />
            </Routes>

            <Nav />
        </header>
    )
}