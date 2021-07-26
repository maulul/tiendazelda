import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

export default function Product(props) {
    
    return (
            <div className="col-md-6">
                <div className="product">
                <Card  >
                    <Link to={`/itemDetail/${props.id}`}>
                    <Card.Img className="imgProduct" variant="top" src={props.imagen} alt="Logo de Zelda" />
                    </Link>
                    <div className="bodyCard">
                        <Card.Title className="cardTitle">{props.name}</Card.Title>     
                        <Card.Text className="cardDesc">{props.desc}</Card.Text>
                        
                        <Card.Body className="pr_qty">                            
                                <ItemCount 
                                    item={props}
                                />
                                <Link to={`/itemDetail/${props.id}`}>
                                    <button>Ver mas</button>
                                </Link>                            
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
