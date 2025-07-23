import { Routes, Route, NavLink } from "react-router-dom";
import { Nav } from "./Nav";
import { Bot, Search } from "lucide-react";

export function Header({ name, age }) {
    return (
        <header className="header">
            <NavLink to="/" className="link link_title">
                <h1 className="header__title">
                    <Bot />
                    Horapp
                </h1>
            </NavLink>

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