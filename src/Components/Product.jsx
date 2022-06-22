import React from 'react';
import ContenedorCard from './ContenedorCard';
import CreatePost from "./CreatePost";
function Product() {
    const [producto, setproducto] = React.useState([]);
    return (  
        <div>
        <h1>Productos</h1>
            <ContenedorCard producto={producto} setproducto={setproducto} />
            <h1>Crear Productos</h1>
            < CreatePost setproducto={setproducto} producto={producto}/>
        </div>
    );
}

export default Product;