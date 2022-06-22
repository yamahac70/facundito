import React from 'react'
import {updatePost} from './funciones/post'
function EditForm({}) {

const [porductoEdit,setProductoEdit]=React.useState(JSON.parse(localStorage.getItem("userEdit")))
 const editProduct=async(e) =>{
            e.preventDefault()
                const form=Object.fromEntries(new FormData(e.target))
            //enviar el dato 
            const res=await updatePost(form,porductoEdit.id)
            if(res){
                alert("producto actualizado")
                
            }   
            
 }      
 React.useEffect(()=>{
    const d= (id)=>document.getElementById(id)

    d("producto_name").value=porductoEdit.producto_name
    d("producto_precio").value=porductoEdit.producto_precio
    d("producto_stock").value=porductoEdit.producto_stock
    d("img").value=porductoEdit.img

 },[])
    return (
    <div className='form-data'> 

 <form onSubmit={editProduct}>
        <label htmlFor="" >Nombre</label>
        <br />
        <input type="text"name="producto_name" id="producto_name" />
        <br />
        <label htmlFor="">precio</label>
        <br />
        <input type="number" name="producto_precio" id="producto_precio"/>
        <br />
        <label htmlFor="">stock</label>
        <br />
        <input type="number" name="producto_stock"  id="producto_stock"/>
        <br />
        <label htmlFor="">Ingresar una img</label>
        <br />
        <input type="text" name="img" id="img"></input>
        <br />
        <button >Enviar</button>
    </form>

    </div>
  )
}

export default EditForm