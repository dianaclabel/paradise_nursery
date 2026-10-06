import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  selectCartItems,
  selectTotalAmount,
  selectTotalQuantity,
} from './CartSlice.jsx'

export default function CartItem() {
  const items = useSelector(selectCartItems)
  const totalQuantity = useSelector(selectTotalQuantity)
  const totalAmount = useSelector(selectTotalAmount)
  const dispatch = useDispatch()

  if (items.length === 0) {
    return (
      <main className="cart-page cart-empty">
        <h1 className="cart-title">Your cart is empty</h1>
        <p className="cart-empty-text">
          Looks like you haven&apos;t added any plants yet. Browse our collection
          and find your perfect green companion.
        </p>
        <Link to="/plants" className="btn btn-primary">
          Continue Shopping
        </Link>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <h1 className="cart-total-amount">
        Total Cart Amount:{' '}
        <span className="cart-total-amount-value">${totalAmount}</span>
      </h1>

      <p className="cart-item-count" aria-live="polite">
        {totalQuantity} {totalQuantity === 1 ? 'plant' : 'plants'} in your cart
      </p>

      <ul className="cart-items" aria-label="Cart items">
        {items.map((item) => (
          <li key={item.name} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-thumb"
              loading="lazy"
            />
            <div className="cart-item-info">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-unit-price">${item.cost}</p>
              <div className="quantity-control" role="group" aria-label={`Quantity for ${item.name}`}>
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => dispatch(decreaseQuantity(item.name))}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  −
                </button>
                <span className="qty-value" aria-live="polite">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => dispatch(increaseQuantity(item.name))}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>
              <p className="cart-item-line-total">
                Total: <strong>${item.cost * item.quantity}</strong>
              </p>
              <button
                type="button"
                className="btn btn-delete"
                onClick={() => dispatch(removeItem(item.name))}
                aria-label={`Delete ${item.name} from cart`}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-actions">
        <button type="button" className="btn btn-primary">
          Continue Shopping
        </button>
        <button type="button" className="btn btn-primary">
          Checkout
        </button>
      </div>
    </main>
  )
}