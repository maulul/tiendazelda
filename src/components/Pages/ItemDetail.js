import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';


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

    return (
        <div className="container"> 
            <div className="row">  

                {itemDetails.map((elemento,index) =>{
                    return(
                        <div>
                            {elemento.name}
                        </div>                        
                    )
                })}  

               
            </div>
        </div>   
    )
}
