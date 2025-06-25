import { Nav } from "./Nav";

export function Footer({ children }) {
    console.log("🚀 ~ Footer ~ children:", children)

    //children === <p>Otro texto</p>
    return (
        <footer>
            <p>Copyright 2025</p>
            <Nav />
            {children}
        </footer>
    )
}