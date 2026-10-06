import { Routes, Route, useLocation } from 'react-router-dom'
import AboutUs from './AboutUs.jsx'
import ProductList from './ProductList.jsx'
import CartItem from './CartItem.jsx'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <div className="app">
      {!isLanding && <Header />}

      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<AboutUs />} />
      </Routes>
    </div>
  )
}

export default App