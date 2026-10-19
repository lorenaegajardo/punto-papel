import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import BarraNavegacion from './components/Navbar'
import Footer from "./components/Footer";

function App() {
  const [carrito, setCarrito] = useState(() => {
    try {
      const carritoGuardado = localStorage.getItem('carritoPuntoPapel')
      return carritoGuardado ? JSON.parse(carritoGuardado) : []
    } catch {
        return []
    }
  })

  useEffect(() => {
    localStorage.setItem('carritoPuntoPapel', JSON.stringify(carrito))
  }, [carrito])

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const productoExistente = carritoActual.find(
        (item) => item.id === producto.id
      )

      if (producto.stock <= 0) {
        return carritoActual
      }

      if (productoExistente) {
        if (productoExistente.cantidad >= producto.stock) {
          return carritoActual
        }

        return carritoActual.map((item) =>
          item.id === producto.id
           ? { ...item, cantidad: item.cantidad + 1 }
           : item
        )
      }

      return [...carritoActual, { ...producto, cantidad: 1 }]
    })
  }

const eliminarDelCarrito = (idProducto) => {
  setCarrito((carritoActual) =>
    carritoActual.filter((item) => item.id !== idProducto)
  )
}

const cambiarCantidad = (idProducto, nuevaCantidad) => {
  if (Number.isInteger(nuevaCantidad) && nuevaCantidad >= 0) {
    setCarrito((carritoActual) =>
      carritoActual
        .map((item) =>
          item.id === idProducto &&
          nuevaCantidad <= item.stock
            ? { ...item, cantidad: nuevaCantidad }
            : item
        )
        .filter((item) => item.cantidad > 0)
    )
  }
}

const totalCarrito = carrito.reduce(
  (total, producto) => total + producto.precio * producto.cantidad,
  0
)

const cantidadTotal = carrito.reduce(
  (total, producto) => total + producto.cantidad,
  0
)

  return (
      <div className="d-flex flex-column min-vh-100">
    <BarraNavegacion />

    <main className="flex-grow-1">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/productos"
          element={<Productos agregarAlCarrito={agregarAlCarrito} />}
      />

      <Route
        path="/producto/:id"
        element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />}
      />

      <Route
        path="/carrito"
        element={
          <Carrito
            carrito={carrito}
            eliminarDelCarrito={eliminarDelCarrito}
            cambiarCantidad={cambiarCantidad}
            totalCarrito={totalCarrito}
            cantidadTotal={cantidadTotal}
          />
        }
      />

        <Route path="/contacto" element={<Contacto />} />

      </Routes>
    </main>

    <Footer />
  </div>
      
  )
}

export default App
