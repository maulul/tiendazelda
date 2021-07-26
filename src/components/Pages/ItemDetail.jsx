import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount';


export default function ItemDetail() {

    const {id} = useParams();    

    const [itemDetails,setItemDetails] = useState([]);
    useEffect(() =>{
        const getItemDetails = async() =>{
            const respuestaProductos = await fetch('../JSON/products.json')
            const data = await respuestaProductos.json()             
            let newData = data.filter(item => item.id === parseFloat(id)) 
            
            setItemDetails(newData);
        }; 

        setTimeout(() => {
            getItemDetails()
        }, 2000);
    }, [])

    let item;

    itemDetails.forEach(elemento=>{
        item={             
            id:elemento.id,
            name:elemento.name,
            imagen:elemento.imagen,
            desc:elemento.desc,
            precio:elemento.precio, 
            stock:elemento.stock 
         }
    })
    
    return (
        <div className="containerDetail">        
                {itemDetails.map((elemento) =>{
                    return(
                        <>
                        <div className="detailBody">
                            <div>
                            {elemento.name}
                            </div>
                            <div>
                                <img src={elemento.imagen} alt="imagen"/>                            
                            </div>
                            <div>
                                {elemento.desc}
                            </div>                          
                                                                                  
                        </div>   
                        <div className="detailCounter">
                        ${elemento.precio}  
                        <ItemCount
                            item={item}
                        />
                    </div>  
                    </>                   
                    )
                })}                
        </div>   
    )
}
