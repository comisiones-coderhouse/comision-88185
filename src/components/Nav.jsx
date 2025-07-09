import { Link, NavLink } from "react-router-dom";

export function Nav() {
    return (
        <nav className="nav">

            {/* <a href="/">Home</a> */}
            {/* <Link to="/">Home nuevo</Link> */}
            <NavLink to="/" className="link">Home</NavLink>

            {/* <a href="/about">About</a> */}
            {/* <Link to="/about">About</Link> */}
            <NavLink to="/about" className="link">About</NavLink>
            <NavLink to="/categoria/electronica" className="link">Electronica</NavLink>
            <NavLink to="/categoria/juguetes" className="link">Juguetes</NavLink>

            {/* <a href="/contact">Contact</a> */}
            {/* <Link to="/contact">Contact</Link> */}
            <NavLink to="/contact" className="link">Contact</NavLink>

        </nav >
    )
}