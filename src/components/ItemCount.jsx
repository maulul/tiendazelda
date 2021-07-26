import React from 'react'
import { useState } from 'react'
import { useContext } from '../context/cartContext';
 


export default function ItemCount(props) {
    const [qty,setQty] = useState(1)
    const {updateCart} = useContext();


    return (
        <div>
             <form onSubmit={(data)=>{updateCart(data,props.item)}}>
                    <button type="button" onClick={()=>{qty === 1?setQty(qty):setQty(qty-1)}}>-</button>
                    <input type="number" disabled value={qty}/>
                    <button type="button" onClick={()=>{qty === props.item.stock?setQty(qty):setQty(qty+1)}}>+</button>
                    <br></br>
                    <button type="submit">Comprar</button>                
            </form>
        </div>
    )
}
