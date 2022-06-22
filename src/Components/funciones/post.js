
import axios from "axios";
const delPost=async (id)=>{
   
   const url=`http://localhost:3001/productos/${id}`
   
    try {
               const res=await axios.delete(url)
               console.log(await res)       
    } catch (error) {
            console.log(error)
    }
}
const updatePost= async(obj,id)=>{
    const url=`http://localhost:3001/productos/${id}`
    try {
        const res=axios.put(url,obj)
        const respuesta=await (await res).data;
        console.log(respuesta)
        
    } catch (error) {
        console.log(error)        
    }
}

export{delPost,updatePost}