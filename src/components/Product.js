import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Product(props) {
    const [qty,setQty] = useState(props.initial);
    
    return (
            <div className="col-md-4">
                <div className="product">
                <Card  >
                    <Link to={`/itemDetail/${props.id}`}>
                    <Card.Img className="imgProduct" variant="top" src={props.imagen} alt="Logo de Zelda" />
                    </Link>
                    <div className="bodyCard">
                        <Card.Title className="cardTitle">{props.name}</Card.Title>     
                        <Card.Text className="cardDesc">{props.desc}</Card.Text>
                        
                        <Card.Body className="pr_qty">
                            <form onSubmit={(data)=>{props.addToCart(data,props)}}>
                                <button type="button" onClick={()=>{qty === props.initial?setQty(qty):setQty(qty-1)}}>-</button>
                                <input type="number" disabled value={qty}/>
                                <button type="button" onClick={()=>{qty === props.stock?setQty(qty):setQty(qty+1)}}>+</button>
                                <button type="submit">Comprar</button>
                                <Link to={`/itemDetail/${props.id}`}>
                                    <button>Ver mas</button>
                                </Link>
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
