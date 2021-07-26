import React from "react";
import { useContext } from "../context/cartContext";

export default function Cart (props) {
    let {cart} = useContext();
    

    return (
        <>
            <div className="cartContainer">
                { 
                
                cart.map(e =>{
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
    
