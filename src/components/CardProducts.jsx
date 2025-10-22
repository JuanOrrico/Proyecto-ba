
import { Card, Button} from "react-bootstrap";



export default function CardProducts({product, agregarAlCarrito}){

return(
    <>
       
        <Card className="h-100 d-flex flex-column">
          <Card.Img variant="top" src={product.image} alt={product.title} className="card-img-top img-fluid" style={{height:"200px", objectFit: "cover"}}/>
          <Card.Body className="d-flex flex-column">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description.slice(0,70)}...</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="danger" onClick={()=>agregarAlCarrito(product)}>Agregar Al Carrito</Button>
          </Card.Body>
        </Card>
    </>
)

}