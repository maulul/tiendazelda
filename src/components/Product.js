import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap';

export default function Product(props) {
    const [qty,setQty] = useState(1);

    return (
            <div className="col-md-4">
                <div className="product">
                <Card  >
                    <Card.Img className="imgProduct" variant="top" src={props.imagen} alt="Logo de Zelda"/>
                    <div className="bodyCard">
                        <Card.Title className="cardTitle">{props.name}</Card.Title>     
                        <Card.Text className="cardDesc">{props.desc}</Card.Text>
                        
                        <Card.Body className="pr_qty">
                            <form onSubmit={(data)=>{props.addToCart(data,props)}}>
                                <button type="button" onClick={()=>{qty === '1'?setQty(qty):setQty(qty-1)}}>-</button>
                                <input type="number" disabled value={qty}/>
                                <button type="button" onClick={()=>{qty === props.stock?setQty(qty):setQty(qty+1)}}>+</button>
                                <button type="submit">Comprar</button>
                            </form>
                        </Card.Body>
                        <Card.Body className="pr_price">
                            <p>$ {props.precio}</p>
                        </Card.Body>
                    </div>
                </Card>
                </div>
            </div>
         
    )
}
