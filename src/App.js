import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Pages/Nav';
import Products from './components/Pages/Products';
import ItemDetail from './components/Pages/ItemDetail';



function App() {
  return ( 
    <Router> 
      <Nav /> 
      <Switch>
        <Route path="/" exact component ={Home}/>
        <Route path="/products" exact component={Products} />
        <Route path="/itemDetail" exact component={ItemDetail} />        
      </Switch>         
    </Router>  
  );

}


const Home = () => {
  return(
  <div>
    <h1>Home page</h1>
  </div>
  )
}

export default App;
