import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";

export function App() {

  const nombre = 'Horacio'
  const edad = 36
  const productos = ["Producto 1", "Producto 2", "Producto 3"]

  return (
    <>
      <Header name={nombre} age={edad} />
      <Main items={productos}>
        {/* <a href="https://www.google.com">Google</a> */}
      </Main>
      {/* <Footer/> */}
      {/* <Footer>
        <p>Otro texto</p>
        <p>Otro texto</p>
        <p>Otro texto</p>
      </Footer> */}
    </>
  );
}