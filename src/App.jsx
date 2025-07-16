import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { Main } from "./components/Main.jsx";

export function App() {

  const nombre = 'Horacio'
  const edad = 36
  
  return (
    <>
      <Header name={nombre} age={edad} />
      <Main />
      <Footer />
    </>
  );
}