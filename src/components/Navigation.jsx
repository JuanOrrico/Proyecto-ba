import {Link, useNavigate} from "react-router-dom"
import {Navbar, Nav} from "react-bootstrap"
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
   
    <Navbar expand="lg" className="me-auto">
        <Navbar.Toggle/>
        <Navbar.Collapse>
            <Nav className="nav">
            <Link to="/" >Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/about">Contactanos</Link> 
            <Link to="/carro"><Carrito/></Link>
            {
            isAuth && (
            <>
                <Link to="/admin">Administrador</Link>
                <Link to="/perfil">Mi Perfil</Link>
             </>
            )
             }
             {
            !isAuth ?
             ( <Link to="/login" className="login">Login</Link>) : 
            ( <button onClick={cerrarSesion}>Cerrar Sesion</button>)

            } 
        
          </Nav>


        </Navbar.Collapse>
        
     
        

    </Navbar>
     
  
      
)

}