import React, { useState} from "react";
import axios from "axios";

function CreatePost({setproducto,producto}) {
  const baseURL= `http://localhost:3001/productos`;

  const [Crear, setCrear] = useState();

  async function crear(e) { 
    e.preventDefault()
    const formulario = Object.fromEntries(new FormData(e.target));
    console.log(formulario)
    
    //axios.post( "http://localhost:3001/productos",formulario)

    try {
      
      const res=await axios.post(baseURL,formulario)
      console.log( await res)
        setproducto([...producto,res.data])
      } catch (error) {
          console.log(error.response.data)
      }
       //.catch(error => console.log(error.response.data))

    }
  return ( 
    <div>
      <form onSubmit={crear}>
        <label htmlFor="" >Nombre</label>
        <br />
        <input type="text"name="producto_name" />
        <br />
        <label htmlFor="">precio</label>
        <br />
        <input type="number" name="producto_precio"/>
        <br />
        <label htmlFor="">stock</label>
        <br />
        <input type="number" name="producto_stock"/>
        <br />
        <label htmlFor="">Ingresar una img</label>
        <br />
        <input type="text" name="img"></input>
        <br />
        <button >Enviar</button>
    </form>
    </div>
  );
}

export default CreatePost;



