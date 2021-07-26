import React from 'react'
import NavBar from '../Navbar';
import Logo from "../../imagenes/225589.png"
import LogoZelda from "../LogoZelda"
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <header>
                <Link to='/'>
                    <LogoZelda logo={Logo}/>
                </Link>
                <NavBar />      
            </header>  
        </div>
    )
}
