import { useMemo, useState } from 'react'
import { useCart } from '../context/CartContext'
import { categories, products } from '../data/products'

export default function Products() {
  const { addToCart } = useCart()
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="container" style={{ padding: '24px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>Shop Houseplants</h2>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['All', ...categories].map((cat) => (
            <button
              key={cat}
              className={`btn ${activeCategory === cat ? '' : 'secondary'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid cols-3 product-grid">
        {filtered.map((p) => (
          <article className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <div className="card-body">
              <div className="product-title">{p.name}</div>
              <div className="muted">{p.category}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                <div className="product-price">${p.price.toFixed(2)}</div>
                <button className="btn" onClick={() => addToCart(p)}>Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}


