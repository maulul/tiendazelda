import React from 'react';
import { useState } from 'react';
import Product from './Product';
import { useEffect } from 'react';
import { useRef } from 'react';
import Cart from './Cart'

export default function ProductContainer() {


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
    
    const [cart,setCart] = useState([]);
    const primerRender = useRef(true);

    const getProduct = (form,producto) =>{
         form.preventDefault();
        
         let item = {
             id:producto.id,
             producto:producto.name,
             imagen:producto.imagen,
             precio:producto.precio,
             quantity:form.target[1].value
         }

         setCart([...cart,item]);
     }

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
                        desc={elemento.desc}
                        precio={elemento.precio}  
                        stock={elemento.stock}
                        initial={1}                              
                        addToCart={getProduct}
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
