import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default function NavBar(){
    return(        
       <div className="navBar">
           <ul>
                <li>
                    <a href="#inicio" className="inicio">Inicio</a>
                </li>
                    
                <li>
                    <a href="#productos" className="productos">Productos</a>
                </li>

                <li>
                    <a href="#carrito" className="carrito"><FontAwesomeIcon icon={faShoppingCart} /></a>
                </li>
           </ul>
       </div>
    )
};