import React from 'react'
import { useState } from 'react'
import Product from './Product'
import { useEffect } from 'react'
import { useRef } from 'react'

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
    
    console.log(products)
    const [cart,setCart] = useState([]);
    const primerRender = useRef(true);

    const getProduct = (form,producto) =>{
         form.preventDefault();
        
         let item = {
            producto: producto.name,
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

             {products.map(elemento =>{
                return(
                    
                <Product 
                name={elemento.name}
                imagen={elemento.imagen}
                desc={elemento.desc}
                precio={elemento.precio}                                
                addToCart={getProduct}
                />
                )
            })}  

            <div className="subtotal">
                 {cart.map(element =>{
                    return (
                        <>
                        <h3>Producto</h3>
                        {element.producto}
                        <h3>cantidad</h3>
                        {element.quantity}
                        <h3>precio por producto</h3>
                        {element.precio}
                        <h3>Total de producto</h3>
                        {element.precio * element.quantity}
                        </>
                    )
                })} 
                
            </div>
        </div>
        </div>   
    )
}
