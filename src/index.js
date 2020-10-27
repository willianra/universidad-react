import React from 'react'
import ReactDom from 'react-dom'

const Inventario=(promps)=>(
  <div>  
    <h1>descripcion del producto </h1>
      <p> nombre: {promps.nombre}</p> 
      <p> descripcion:{promps.descripcion}</p>
      <p> codigo:{promps.codigo}</p>
      <p> precio de venta:{promps.precioVenta} bs</p>
      <p> precio de compra:{promps.precioCompra} bs</p>
      <p> stock:{promps.stock} u </p> 
  </div>
)
 
 const App=()=>( 
   <div>
   <Inventario 
      nombre={'coca-cola'}
      descripcion={'coca-cola zero 2L'}
      codigo={'101110000101'}
      precioVenta={12.5}
      precioCompra={8}
      stock={10}
      
    >
   </Inventario>
   <Inventario 
      nombre={'fideos'}
      descripcion={'fideos 2kg'}
      codigo={'01110100100'}
      precioVenta={5}
      precioCompra={3}
      stock={20}
      
    >
   </Inventario>
   </div>
 )

ReactDom.render(<App/>,document.getElementById('root'))