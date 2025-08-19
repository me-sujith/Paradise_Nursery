import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, totalCost, totalItems, increase, decrease, remove, clear } = useCart()

  const hasItems = items.length > 0

  return (
    <div className="container" style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>Your Cart</h2>
        <div className="muted">{totalItems} {totalItems === 1 ? 'item' : 'items'}</div>
      </div>

      {!hasItems && (
        <div className="card" style={{ padding: 24, textAlign: 'center' }}>
          <p className="muted" style={{ marginBottom: 16 }}>Your cart is empty.</p>
          <Link className="btn" to="/products">Continue Shopping</Link>
        </div>
      )}

      {hasItems && (
        <div className="grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
          <div className="cart-list">
            {items.map(({ product, quantity }) => (
              <div className="cart-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                  <div style={{ fontWeight: 700 }}>{product.name}</div>
                  <div className="muted">${product.price.toFixed(2)} each</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className="qty">
                    <button aria-label={`Decrease ${product.name}`} onClick={() => decrease(product.id)}>-</button>
                    <span>{quantity}</span>
                    <button aria-label={`Increase ${product.name}`} onClick={() => increase(product.id)}>+</button>
                  </div>
                  <div style={{ minWidth: 80, textAlign: 'right', fontWeight: 700 }}>${(product.price * quantity).toFixed(2)}</div>
                  <button className="btn secondary" onClick={() => remove(product.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          <aside className="card" style={{ padding: 16, alignSelf: 'start' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <div className="muted">Items</div>
              <div>{totalItems}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <div className="muted">Total</div>
              <div style={{ fontWeight: 800 }}>${totalCost.toFixed(2)}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link to="/products" className="btn secondary" style={{ flex: 1 }}>Continue Shopping</Link>
              <button className="btn" style={{ flex: 1 }} onClick={() => alert('Checkout not implemented for this demo.')}>Checkout</button>
            </div>
            <button className="btn secondary" style={{ width: '100%', marginTop: 8 }} onClick={clear}>Clear Cart</button>
          </aside>
        </div>
      )}
    </div>
  )
}


