import React from 'react'
import { useState } from 'react'


export default function Product(props) {

    const [qty,setQty] = useState(1);

    return (
        <div className="product">
            <div className="pr_title">
                <h3>{props.name}</h3>
            </div>

            <div className="pr_img">
                <img src={props.imagen} alt="Logo de Zelda"/>
            </div>

            <div className="pr_desc">
                <p>{props.desc}</p>
            </div>
            <div className="pr_qty">
                <form onSubmit={(data)=>{props.addToCart(data,props)}}>
                    <button type="button" onClick={()=>{setQty(qty - 1)}}>-</button>
                    <input type="number" disabled value={qty}/>
                    <button type="button" onClick={()=>{setQty(qty + 1)}}>+</button>
                    <button type="submit">carrito</button>
                </form>
            </div>
            <div className="pr_price">
                <p>$ {props.precio}</p>
            </div>
        </div>
    )
}
