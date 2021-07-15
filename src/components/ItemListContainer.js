import React from 'react'
import { useState } from 'react'
import Product from './Product'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function ProductContainer() {

    const arrayDeProductos = [
        {
            name:'Logo de Zelda',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/The_Legend_of_Zelda.svg/526px-The_Legend_of_Zelda.svg.png',
            desc:'es el logo principal',
            precio:500
            
        },        

        {
            name:'espada',
            imagen:'https://studio.cults3d.com/_8__EoH_s7cGKjbZ9gO7sz1jfG8=/https://files.cults3d.com/uploaders/14052590/illustration-file/ebd27f55-4a72-43ed-8d15-88d1a1a7e6d2/33791.png',
            desc:'master sword',
            precio:450
        }
        
    ]

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
        <div>           

            {arrayDeProductos.map(elemento =>{
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
    )
}
