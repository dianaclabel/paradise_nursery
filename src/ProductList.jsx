import { useDispatch, useSelector } from 'react-redux'
import { addItem, selectCartItems } from './CartSlice.jsx'
import { categories } from './data/plants.js'

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const cartNames = new Set(cartItems.map((i) => i.name))

  const handleAdd = (plant) => {
    dispatch(addItem(plant))
  }

  return (
    <main className="product-list">
      {categories.map((category) => (
        <section key={category.id} className="category">
          <h2 className="category-title">{category.title}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => {
              const inCart = cartNames.has(plant.name)
              return (
                <article key={plant.name} className="plant-card">
                  <span className="sale-badge">SALE</span>
                  <h3 className="plant-name">{plant.name}</h3>
                  <div className="plant-thumb-wrap">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-thumb"
                      loading="lazy"
                    />
                  </div>
                  <p className="plant-cost">${plant.cost}</p>
                  <p className="plant-description">{plant.description}</p>
                  <button
                    type="button"
                    className="btn btn-add-to-cart"
                    onClick={() => handleAdd(plant)}
                    disabled={inCart}
                    aria-label={
                      inCart
                        ? `${plant.name} already in cart`
                        : `Add ${plant.name} to cart`
                    }
                  >
                    {inCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  )
}