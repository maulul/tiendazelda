import './App.css';
import NavBar from './components/Navbar';
import ProductContainer from './components/ProductContainer';



function App() {
  return ( 
    <>      
    <header className="container">
      <NavBar />      
    </header>    

   

    <div>
      <ProductContainer />
    </div>
  </>  
  );

}


export default App;
