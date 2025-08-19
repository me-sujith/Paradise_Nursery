import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { totalItems } = useCart()
  const { pathname } = useLocation()

  return (
    <header className="app-header">
      <div className="container app-header-inner">
        <Link to="/" className="brand">
          <span style={{
            width: 28,
            height: 28,
            display: 'inline-block',
            borderRadius: 6,
            background: 'linear-gradient(135deg, var(--green-500), var(--green-700))',
          }} />
          Paradise Nursery
        </Link>
        <nav className="nav">
          {pathname !== '/products' && <Link to="/products" className="btn secondary">Shop</Link>}
          {pathname !== '/' && <Link to="/" className="btn secondary">Home</Link>}
          <Link to="/cart" className="btn icon cart-indicator" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <span className="cart-count">{totalItems}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}


