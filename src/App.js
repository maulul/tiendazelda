import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return ( 
    <>      
      <header>
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
