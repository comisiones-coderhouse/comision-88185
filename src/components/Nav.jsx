import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../providers/CartProvider";

export function Nav() {

    const resultado = useContext(CartContext)

    return (
        <nav className="nav">

            <NavLink to="/about" className="link">About</NavLink>
            <NavLink to="/categoria/electronicos" className="link">Electronicos</NavLink>
            <NavLink to="/categoria/bazar" className="link">Bazar</NavLink>

            <NavLink to="/contact" className="link">Contact</NavLink>

            <NavLink to="/cart">
                <ShoppingCart />
                {resultado.cantidad}
            </NavLink>
            
        </nav >
    )
}