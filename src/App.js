import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import LogoZelda from "./components/LogoZelda"
import Logo from "./imagenes/225589.png"


function App() {
  return ( 
    <>      
      <header>
        <a href="#inicio" className="navbar-logo"><LogoZelda logo={Logo}/></a>
        <NavBar />      
      </header>  
      <div className="fakeHeader"></div>  

      <div>
        <ItemListContainer />
      </div>      
  </>  
  );

}


export default App;
