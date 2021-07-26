import React from 'react';
import { useState } from 'react';
import Product from './Product';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from '../context/cartContext';
import Cart from './Cart'


export default function ItemListContainer() {


    const [products,setProducts] = useState([]);
    useEffect(() =>{
        const getProducts = async() =>{
            const respuestaProductos = await fetch('./JSON/products.json')
            const data = await respuestaProductos.json()
            setProducts(data)

        }; 

        setTimeout(() => {
            getProducts()
        }, 2000);
    },[])
    
    const {cart} = useContext();
    const primerRender = useRef(true);
    


     useEffect(() =>{
         if(!primerRender.current){
             alert('Su item fue agregado al carrito')
            
         } else {
             primerRender.current = false;
         }
     },[cart])

    return (
        <div className="container"> 
            <div className="row">  

                {products.map((elemento,index) =>{
                    return(
                        
                        <Product 
                        key={index}
                        id={elemento.id}
                        name={elemento.name}
                        imagen={elemento.imagen}                        
                        precio={elemento.precio}  
                        stock={elemento.stock}
                        initial={1}                                                   
                        />
                    )
                })}  

                <div className="subtotal">
                    {
                        <Cart cart={cart}/>
                    }
                
                </div>
            </div>
        </div>   
    )
}
