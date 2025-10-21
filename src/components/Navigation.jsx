import {Link, useNavigate} from "react-router-dom"
import {Navbar, Nav, Button} from "react-bootstrap"
import Carrito from "./Carrito"


import "../styles/navigator.css"


export default function Navigation(){
    const navigate = useNavigate();

    const isAuth= localStorage.getItem('auth')==='true'

    const cerrarSesion=()=>{
        localStorage.removeItem('auth')
        navigate('/login')
    }

return(
   
    <Navbar expand="lg" className="nav" fixed="top"  id="navbarToggleExternalContent">
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/about">Contacto</Nav.Link>
            
            
            {
            isAuth && (
            <>
                <Nav.Link as={Link} to="/admin">Administrador</Nav.Link>
                <Nav.Link as={Link} to="/perfil">Mi Perfil</Nav.Link>
            
             </>
            )
             }
             {
            !isAuth ?
            
             ( <Nav.Link as={Link} to="/login">Login</Nav.Link>) : 
            ( <button onClick={cerrarSesion}>Cerrar Sesion</button>)

            } 
        
          </Nav>
            

        </Navbar.Collapse>
        <Nav>
            <Nav.Link as={Link} to="/carro"><Carrito/></Nav.Link> 
        </Nav>
        
     
        

    </Navbar>
     
  
      
)

}