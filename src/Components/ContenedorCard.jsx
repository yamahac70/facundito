
import React, {useEffect, useState} from 'react';
import CardComponents from './Card';
import axios from "axios";
function ContenedorCard({producto,setproducto}) {


  
const baseURL= `http://localhost:3001/productos`;


  useEffect(() => {
    //con la peticion get de axios obtengo los productos 
    axios.get(baseURL)
      .then(res => {
        const data = res.data;
        setproducto(data) 
      })
      .catch(error => console.log(error.response.data))

  },[])
  return ( 
    <>
    
          {
          <CardComponents
            productos={producto} />
      }
    </>
  );
}

export default ContenedorCard;