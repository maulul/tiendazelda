import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'



export default function NavBar(){
    

    return( 
         
        <nav className="navBar">
            <ul> 
                <Link to='/' className="inicio">                 
                    <li >inicio</li>
                </Link> 

                <Link to='/products' className="productos">    
                    <li >productos</li>
                </Link>
                <Link to='/cart' className="carrito">                              
                    <li ><FontAwesomeIcon icon={faShoppingCart} /></li> 
                </Link>                     
            </ul>
            </nav>      
    )
};
