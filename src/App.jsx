
import { Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import BarraNavegacion from './components/Navbar'

function App() {
  return (
     <>
        <BarraNavegacion />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </>

  )
}

export default App
