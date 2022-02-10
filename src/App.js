
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer saludo="Hola aca va a ir la lista de los productos" />
    <ItemCount stock={5} initial={1} addon={0}/>
    </>
  );
}

export default App;
