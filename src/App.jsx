
import { Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import BarraNavegacion from './components/Navbar'
import Footer from "./components/Footer";

function App() {
  return (
      <div className="d-flex flex-column min-vh-100">
    <BarraNavegacion />

    <main className="flex-grow-1">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </main>

    <Footer />
  </div>
      
  )
}

export default App
