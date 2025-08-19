import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing-overlay">
        <div className="container landing-content">
          <h1>Bring Paradise Home</h1>
          <p>
            Paradise Nursery curates resilient, beginner-friendly houseplants that brighten spaces and
            purify air. From low-light champions to statement beauties, discover greenery that thrives with you.
          </p>
          <Link to="/products" className="btn">Get Started</Link>
        </div>
      </div>
    </section>
  )
}


