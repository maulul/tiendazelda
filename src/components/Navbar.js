import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import LogoZelda from "./LogoZelda"
import Logo from "../imagenes/225589.png"

export default function NavBar(){
    return(  
        <> 
        <header>
            <div className="navBar">
                <ul>
                    <li>
                        <LogoZelda logo={Logo}/>
                    </li>

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
        </header>     
        
        </>
       
    )
};