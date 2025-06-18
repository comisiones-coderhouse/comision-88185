export function Header({ name, age }) {
    return (
        <header>
            <h1>Bienvenido {name}</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}