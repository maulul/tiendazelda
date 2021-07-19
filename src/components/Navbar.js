import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



export default function NavBar(){
    

    return(  
         <>
            <nav className="navBar">
                    <ul>                   
                        <li>
                            <a href="#inicio" className="inicio">inicio</a>
                        </li>
                                
                        <li>
                            <a href="#productos" className="productos">productos</a>
                        </li>

                        <li>
                            <a href="#carrito" className="carrito"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        </li>
                    </ul>
            </nav>
            
        </>
        
       
    )
};
