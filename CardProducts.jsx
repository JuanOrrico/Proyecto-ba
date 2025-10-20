import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap";

import "../styles/cardProduct.css"
export default function CardProducts(){

const [data, setData] = useState([])


useEffect(()=>{

    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
                setData(data)
                
        });
    

},[])


return(
    <>
        <h2 style={{display:"flex", justifyContent:"center", alignSelf:"center", marginTop:"80px", marginBottom:"35px", textDecoration:"underline"}} className="h2-prod">Nuestro Productos</h2>
        <section className="section-card-prod" >
        
        { data && data.length === 0 ? <Spinner animation="border" variant="warning"/> :
          data.map(prod => (
            
            <div key={prod.id} className="container-card" >
                <img src={prod.image} alt={prod.title} style={{height:"100px",objectFit:"contain", alignItems:"center"}} className="img-card" />
                <h3 className="h3-card">{prod.title}</h3>   
                <p className="p-price">${prod.price}.-</p>
                <p style={{minHeight:"80px", overflow:"hidden", textOverflow: "ellipsis", 
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical"}} className="p-desc">{prod.description}</p>
                <button className="btn-add">Agregar al Carrito</button>

            </div>
          ))
        }
        </section>
    </>
)

}