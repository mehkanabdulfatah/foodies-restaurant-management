
import './App.css';

function App() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>🍔 Foodies</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="cart-btn">
          My Cart 🛒
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">WELCOME TO FOODIES</p>

          <h1>
            Delicious Food,<br />
            Delivered To You!
          </h1>

          <p>
            Enjoy fresh, delicious and tasty meals
            delivered straight to your door.
          </p>

          <button className="order-btn">
            Order Now
          </button>
        </div>

        <div className="hero-image">
          🍕
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu" id="menu">
        <h2>Our Popular Food</h2>

        <div className="food-container">

          <div className="food-card">
            <div className="food-image">🍕</div>
            <h3>Pizza</h3>
            <p>Cheesy delicious pizza</p>
            <h4>Rs. 1200</h4>
            <button>Add to Cart</button>
          </div>

          <div className="food-card">
            <div className="food-image">🍔</div>
            <h3>Burger</h3>
            <p>Fresh and juicy burger</p>
            <h4>Rs. 650</h4>
            <button>Add to Cart</button>
          </div>

          <div className="food-card">
            <div className="food-image">🍟</div>
            <h3>French Fries</h3>
            <p>Crispy golden fries</p>
            <h4>Rs. 350</h4>
            <button>Add to Cart</button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <h3>Foodies Restaurant</h3>
        <p>Fresh Food, Happy Life!</p>
      </footer>

    </div>
  );
}

export default App;
