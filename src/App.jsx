import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import RutaProtegida from "./components/RutasProtegidas"
import Footer from "./components/Footer"

import Products from "./pages/Products"
import Home from "./pages/Home"
import About from "./pages/About"
import Carro from "./pages/PaginaCarro"
import Administrator from "./pages/Administrator"
import Perfil from "./pages/Perfil"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"


function App() {
 

  return (
    
      <BrowserRouter>
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/productos" element={<Products/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/carro" element={<Carro/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/admin" element={<RutaProtegida><Administrator/></RutaProtegida>}/>
              <Route path="/perfil/:id" element={<RutaProtegida><Perfil/></RutaProtegida>}/>
              <Route path="/notfound" element={<NotFound/>}/>        
            </Routes>  
          </main>
             <Footer/>  
          </BrowserRouter>
    
  )
}

export default App
