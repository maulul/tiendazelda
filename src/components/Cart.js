import React from "react"

export default function Cart (props) {
    let cart1 = props.cart;
    console.log(props)

    return (
        <>
            <div className="cardContainer">
                { 
                
                cart1.map(e =>{
                    return(
                        
                                <ItemsCart
                                    producto={e.producto}
                                    precio={e.precio}
                                    quantity={e.quantity}
                                />                           
                                  
                    ) 
                })        
                }
            </div>
        </>
    )
        } 
    
    export function ItemsCart(props) {

        return (
            <div>
                <div className="cardTitle">
                    Producto:{props.producto}
                </div>
                <div className="cardPrice">
                    Precio: {props.precio}
                </div>
                <div className="cardQty">
                    Cantidad:{props.quantity}
                </div>
            </div>

        )
    }
    
