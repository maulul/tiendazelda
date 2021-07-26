import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Nav from './components/Pages/Nav';
import Products from './components/Pages/Products';
import ItemDetail from './components/Pages/ItemDetail';
import Carts from './components/Cart'
import ProviderContext from './context/ProviderContext';

export default () => 
  <ProviderContext>
    <App></App>
  </ProviderContext>

function App() {
  return ( 
    <Router> 
      <Nav /> 
      <Switch>
        <Route path="/" exact component ={Home}/>
        <Route path="/products" exact component={Products} />
        <Route path="/itemDetail/:id" exact component={ItemDetail} />
      </Switch>         
    </Router>  
  );

}


const Home = () => {
  return(
    <div className="mainTitle">
      <h1>Home page</h1>
      <h2>Bienvenidos a la tienda de Zelda</h2>
      <Link to='/products'>
        <button>Click para ver nuestros productos</button>
      </Link>
    </div>
  )
}

