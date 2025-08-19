import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Landing from './pages/Landing'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </CartProvider>
  )
}

export default App
