import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Nosotros from './paginas/Nosotros'
import Publicacion from './paginas/Publicacion';
import Header from './componentes/Header'

function App() {
  return (
 <>
 <BrowserRouter>
    <Header />
   <Routes>
     <Route path="/Home" element={<Home />} />
     <Route path="/Nosotros" element={<Nosotros />} />
     <Route path="/Publicacion" element={<Publicacion />} />
   </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
