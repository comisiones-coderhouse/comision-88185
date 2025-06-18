/* 

Los componentes : 

- Son funciones
- La primera letra debe ser mayuscula
- Retorna JSX

*/
import { Header } from "./Header.jsx"
import { Main } from "./components/Main.jsx"


export function App() {

  const nombre = 'Horacio'
  const edad = 36

  return (
    <>
      <Header name={nombre} age={edad} />
      <Main />
      <footer>
        <p>Copyright 2025</p>
      </footer>
    </>
  );
}