import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap';

export default function Product(props) {
    console.log(props)
    const [qty,setQty] = useState(1);

    return (
            <div className="col-md-4">
                <Card style={{width: '18rem'}} className="product">
                    <Card.Img variant="top" src={props.imagen} alt="Logo de Zelda"/>
                    <Card.Title>{props.name}</Card.Title>     
                    <Card.Text>{props.desc}</Card.Text>
                    
                    <Card.Body className="pr_qty">
                        <form onSubmit={(data)=>{props.addToCart(data,props)}}>
                            <button type="button" onClick={()=>{setQty(qty - 1)}}>-</button>
                            <input type="number" disabled value={qty}/>
                            <button type="button" onClick={()=>{setQty(qty + 1)}}>+</button>
                            <button type="submit">carrito</button>
                        </form>
                    </Card.Body>
                    <Card.Body className="pr_price">
                        <p>$ {props.precio}</p>
                    </Card.Body>
                </Card>
            </div>
         
    )
}
