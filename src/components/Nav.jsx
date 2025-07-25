import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../providers/CartProvider";

export function Nav() {

    const resultado = useContext(CartContext)

    return (
        <nav className="nav">

            {/* <NavLink to="/" className="link">Home</NavLink> */}

            <NavLink to="/about" className="link">About</NavLink>
            <NavLink to="/categoria/electronica" className="link">Electronica</NavLink>
            <NavLink to="/categoria/juguetes" className="link">Juguetes</NavLink>

            <NavLink to="/contact" className="link">Contact</NavLink>

            <NavLink to="/cart">
                <ShoppingCart />
                {resultado.cantidad}
            </NavLink>
        </nav >
    )
}