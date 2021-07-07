import './App.css';
import NavBar from './components/Navbar';
import CarritoDeCompras from './components/CarritoDeCompras';

function App() {
  return ( 
    <>      
    <header className="container">
      <NavBar />      
    </header>    

    <section>
      <CarritoDeCompras greetings="Carrito"/>
    </section>
  </>  
  );

}


export default App;
