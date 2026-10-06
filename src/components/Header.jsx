import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../CartSlice.jsx'

export default function Header() {
  const totalQuantity = useSelector(selectTotalQuantity)

  return (
    <header className="app-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Paradise Nursery home">
          <span className="brand-logo" aria-hidden="true">
            <svg viewBox="0 0 64 64" width="40" height="40">
              <circle cx="32" cy="32" r="30" fill="#ffffff" />
              <path
                d="M32 14 C 24 22 22 30 24 38 C 26 46 32 50 32 50 C 32 50 38 46 40 38 C 42 30 40 22 32 14 Z"
                fill="#4CAF50"
              />
              <circle cx="32" cy="32" r="3" fill="#ffffff" />
            </svg>
          </span>
          <span className="brand-text">
            <strong>Paradise Nursery</strong>
            <em>Where Green Meets Serenity</em>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/plants" className="nav-link">
            Plants
          </NavLink>
          <NavLink to="/cart" className="nav-link nav-link-cart">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              aria-hidden="true"
              className="cart-icon"
            >
              <path
                d="M3 4h2l1.6 11.2A2 2 0 0 0 8.6 17h8.8a2 2 0 0 0 2-1.8L21 7H6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>
              <span className="cart-count" aria-label={`${totalQuantity} items in cart`}>
                {totalQuantity}
              </span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}