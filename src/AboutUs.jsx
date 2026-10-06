import { Link } from 'react-router-dom'
import nurseryBg from './assets/bg/nursery-bg.jpg'

export default function AboutUs() {
  return (
    <section
      className="landing"
      style={{ backgroundImage: `url(${nurseryBg})` }}
    >
      <div className="landing-overlay">
        <div className="landing-card">
          <h1 className="landing-title">Welcome To<br />Paradise Nursery</h1>
          <p className="landing-tagline">Where Green Meets Serenity</p>
          <Link to="/plants" className="btn btn-get-started">
            Get Started
          </Link>
        </div>

        <div className="landing-about">
          <h2>About Paradise Nursery</h2>
          <p>
            <strong>Welcome to Paradise Nursery, where green meets serenity!</strong>
          </p>
          <p>
            At Paradise Nursery, we are passionate about bringing nature closer to
            you. Our mission is to provide a wide range of high-quality plants that
            not only enhance the beauty of your surroundings but also contribute to
            a healthier and more sustainable lifestyle. From air-purifying plants to
            aromatic fragrant ones, we have something for every plant enthusiast.
          </p>
          <p>
            Our team of experts is dedicated to ensuring that each plant meets our
            strict standards of quality and care. Whether you&apos;re a seasoned
            gardener or just starting your green journey, we&apos;re here to support
            you every step of the way. Feel free to explore our collection, ask
            questions, and let us help you find the perfect plant for your home or
            office.
          </p>
          <p>
            Join us in our mission to create a greener, healthier world. Visit
            Paradise Nursery today and experience the beauty of nature right at your
            doorstep.
          </p>
        </div>
      </div>
    </section>
  )
}