import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return ( 
    <>      
    <header className="container">
      <NavBar />      
    </header>    

   

    <div>
      <ItemListContainer />
    </div>
  </>  
  );

}


export default App;
