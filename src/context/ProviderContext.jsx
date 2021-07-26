import React, { useState } from 'react';
import { Provider } from './cartContext';

function ProviderContext (props) {

    const [cart,setCart] = useState([]);

    const updateCart = (form,producto) =>{
         form.preventDefault();
        
         let item = {
             id:producto.id,
             producto:producto.name,
             imagen:producto.imagen,
             precio:producto.precio,
             quantity:form.target[1].value
         }

         setCart([...cart,item]);
     }
     const value = {
         cart,
         updateCart
    }

    return <Provider
                value={value}
                {...props}
            />
}
    

export default ProviderContext;