
import { useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Organic Wheat Seeds",
    category: "Seeds",
    price: 420,
    unit: "5 kg",
    emoji: "🌾",
    seller: "Shree Agro Store",
  },
  {
    id: 2,
    name: "NPK Fertilizer",
    category: "Fertilizers",
    price: 680,
    unit: "25 kg",
    emoji: "🌱",
    seller: "GreenGrow Supplies",
  },
  {
    id: 3,
    name: "Drip Irrigation Kit",
    category: "Equipment",
    price: 1250,
    unit: "1 kit",
    emoji: "💧",
    seller: "Jai Kisan Tools",
  },
  {
    id: 4,
    name: "Hand Sprayer",
    category: "Equipment",
    price: 890,
    unit: "1 piece",
    emoji: "🚿",
    seller: "FarmTech Jaipur",
  },
];

const categories = ["All", "Seeds", "Fertilizers", "Equipment"];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState("Farmer");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.seller.toLowerCase().includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const addToCart = (product) => {
    setCart((previous) => [...previous, product]);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="site-header">
        <a href="#home" className="brand">
          <span className="brand-icon">🌾</span>
          <span>
            Agri<span>Direct</span>
            <small>GROW TOGETHER</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("marketplace")}>Marketplace</button>
          <button onClick={() => scrollTo("how-it-works")}>
            How It Works
          </button>
          <button onClick={() => scrollTo("about")}>About</button>
        </nav>

        <button
          className="cart-button"
          onClick={() => scrollTo("marketplace")}
        >
          🛒 Cart <b>{cart.length}</b>
        </button>
      </header>

      {/* HERO SECTION */}
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span></span>
              LOCAL AGRICULTURE. BETTER TOMORROW.
            </div>

            <h1>
              Everything your farm needs,
              <em> directly.</em>
            </h1>

            <p className="hero-text">
              Connect with verified agriculture suppliers,
              find quality products and get farm essentials
              delivered to your village.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => scrollTo("marketplace")}
              >
                Explore Marketplace →
              </button>

              <button
                className="text-button"
                onClick={() => scrollTo("how-it-works")}
              >
                See How It Works ↗
              </button>
            </div>

            <div className="hero-trust">
              <div className="trust-avatars">
                <span>👨🏽‍🌾</span>
                <span>👩🏽‍🌾</span>
                <span>🧑🏽‍🌾</span>
              </div>

              <p>
                <strong>Built for farming communities</strong>
                <br />
                Farmers • Suppliers • Village Partners
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <div className="sun"></div>
              <div className="field field-one"></div>
              <div className="field field-two"></div>
              <div className="field field-three"></div>

              <div className="farmer-illustration">👨🏽‍🌾</div>
              <div className="plant plant-one">🌱</div>
              <div className="plant plant-two">🌿</div>
            </div>

            <div className="floating-card delivery-card">
              <span>🚚</span>
              <div>
                <strong>Reliable Delivery</strong>
                <small>Closer to your village</small>
              </div>
            </div>

            <div className="floating-card verified-card">
              <span className="check">✓</span>
              <div>
                <strong>Verified Suppliers</strong>
                <small>Shop with confidence</small>
              </div>
            </div>
          </div>

          <div className="hero-bottom-note">
            🌱 Helping farmers grow with confidence
          </div>
        </section>

        {/* STATS */}
        <section className="stats-strip">
          <div><strong>01</strong><span>One Trusted Platform</span></div>
          <div><strong>02</strong><span>Verified Suppliers</span></div>
          <div><strong>03</strong><span>Village Level Support</span></div>
          <div><strong>04</strong><span>Transparent Ordering</span></div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="problem-section section-wrap" id="about">
          <div className="section-heading">
            <span className="eyebrow">THE CHALLENGE</span>

            <h2>
              Farmers deserve a
              <em> fairer way</em> to grow.
            </h2>

            <p>
              Finding genuine products and dependable support
              can be difficult. AgriDirect makes the process
              simpler and more transparent.
            </p>
          </div>

          <div className="problem-grid">
            <article className="problem-card">
              <span className="problem-icon">⚠️</span>
              <h3>Fake Products</h3>
              <p>Unverified products can put crops and money at risk.</p>
            </article>

            <article className="problem-card">
              <span className="problem-icon">🤝</span>
              <h3>Middlemen</h3>
              <p>Extra layers can make prices less transparent.</p>
            </article>

            <article className="problem-card">
              <span className="problem-icon">⏱️</span>
              <h3>Slow Delivery</h3>
              <p>Late farm essentials can affect farming activities.</p>
            </article>

            <article className="problem-card">
              <span className="problem-icon">🧑🏽‍🌾</span>
              <h3>Limited Support</h3>
              <p>Farmers need accessible guidance and local assistance.</p>
            </article>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="solution-section">
          <div className="solution-inner section-wrap">
            <div className="solution-art">
              <div className="solution-circle">🌱</div>
              <span className="leaf leaf-a">🍃</span>
              <span className="leaf leaf-b">🌿</span>
              <span className="solution-label">GROW BETTER</span>
            </div>

            <div className="solution-copy">
              <span className="eyebrow light">
                THE AGRIDIRECT SOLUTION
              </span>

              <h2>
                A simpler journey from supplier to
                <em> soil.</em>
              </h2>

              <p>
                AgriDirect brings farmers and trusted suppliers
                closer through a convenient digital platform
                and village-level support.
              </p>

              <ul className="check-list">
                <li>✓ Direct ordering from suppliers</li>
                <li>✓ Verified agriculture products</li>
                <li>✓ Village Agri Partners</li>
                <li>✓ Fast and trackable delivery</li>
              </ul>

              <button
                className="white-button"
                onClick={() => scrollTo("marketplace")}
              >
                Discover Marketplace →
              </button>
            </div>
          </div>
        </section>

        {/* MARKETPLACE */}
        <section className="market-section section-wrap" id="marketplace">
          <div className="section-heading market-heading">
            <span className="eyebrow">THE MARKETPLACE</span>

            <h2>
              Good Products.
              <em> Trusted People.</em>
            </h2>

            <p>
              Explore agriculture products available on AgriDirect.
            </p>
          </div>

          <div className="market-controls">
            <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category ? "active" : ""
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="search-box">
              <span>⌕</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
              />
            </label>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-art">
                  <span className="product-tag">Verified</span>
                  <span className="product-emoji">
                    {product.emoji}
                  </span>
                </div>

                <div className="product-info">
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                  <p>By {product.seller}</p>

                  <div className="product-bottom">
                    <div>
                      <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                      <small> / {product.unit}</small>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </article>
            ))}

            {filteredProducts.length === 0 && (
              <div className="empty-state">
                No products found.
              </div>
            )}
          </div>

          <p className="demo-note">
            Demo marketplace. Product prices and suppliers are sample data.
          </p>
        </section>

        {/* WORKFLOW */}
        <section className="workflow-section" id="how-it-works">
          <div className="section-wrap">
            <div className="section-heading centered">
              <span className="eyebrow">HOW IT WORKS</span>

              <h2>
                From a simple order to your
                <em> farm gate.</em>
              </h2>

              <p>A clear process that keeps farmers at the centre.</p>
            </div>

            <div className="workflow">
              {[
                ["👨🏽‍🌾", "Farmer", "Browse and choose products"],
                ["🛒", "Order", "Place an order"],
                ["🏪", "Supplier", "Prepare the products"],
                ["🚚", "Delivery", "Deliver to your village"],
                ["🌱", "Farmer", "Receive your products"],
              ].map((step, index) => (
                <div className="workflow-step" key={step[1]}>
                  <div className="step-icon">{step[0]}</div>
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step[1]}</h3>
                  <p>{step[2]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features-section section-wrap">
          <div className="section-heading">
            <span className="eyebrow">
              ONE PLATFORM, THREE EXPERIENCES
            </span>

            <h2>
              Designed for the whole
              <em> agri-community.</em>
            </h2>
          </div>

          <div className="feature-layout">
            <div className="feature-tabs">
              {["Farmer", "Supplier", "Admin"].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "selected" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  <span>
                    {tab === "Farmer" ? "👨🏽‍🌾" :
                     tab === "Supplier" ? "🏪" : "📊"}
                  </span>

                  <div>
                    <strong>
                      {tab === "Admin" ? "Admin Dashboard" : `${tab} App`}
                    </strong>
                    <small>
                      {tab === "Farmer"
                        ? "Shop and track orders"
                        : tab === "Supplier"
                        ? "Manage products and orders"
                        : "Manage the platform"}
                    </small>
                  </div>

                  <b>→</b>
                </button>
              ))}
            </div>

            <div className="feature-preview">
              <div className="preview-top">
                <span>AGRIDIRECT / {activeTab.toUpperCase()}</span>
                <span className="online-dot">● LIVE CONCEPT</span>
              </div>

              <div className="preview-content">
                <div>
                  <small>WELCOME TO AGRIDIRECT</small>

                  <h3>
                    {activeTab === "Farmer"
                      ? "Your farm, one step ahead."
                      : activeTab === "Supplier"
                      ? "Reach more farming communities."
                      : "A clear view of your platform."}
                  </h3>

                  <p>
                    {activeTab === "Farmer"
                      ? "Find trusted farm essentials and track orders."
                      : activeTab === "Supplier"
                      ? "Showcase products and manage orders."
                      : "Manage users, suppliers and marketplace activity."}
                  </p>
                </div>

                <div className="preview-stats">
                  <div>
                    <span>Orders</span>
                    <strong>12</strong>
                  </div>

                  <div>
                    <span>Products</span>
                    <strong>08</strong>
                  </div>
                </div>

                <div className="preview-progress">
                  <span>Order Journey</span>
                  <div><i></i></div>
                  <small>Order → Supplier → Delivery</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS MODEL */}
        <section className="business-section">
          <div className="section-wrap business-inner">
            <div>
              <span className="eyebrow">BUSINESS MODEL</span>

              <h2>
                Value for farmers.
                <em> Opportunity for partners.</em>
              </h2>

              <p>
                AgriDirect's proposed business model combines
                product margins, supplier commissions and delivery fees.
              </p>
            </div>

            <div className="revenue-list">
              {[
                ["01", "Product Margins", "Competitive product sourcing"],
                ["02", "Supplier Commission", "Verified agriculture suppliers"],
                ["03", "Delivery Fees", "Convenient local delivery"],
              ].map((item) => (
                <div key={item[0]}>
                  <span>{item[0]}</span>
                  <div>
                    <strong>{item[1]}</strong>
                    <small>{item[2]}</small>
                  </div>
                  <b>↗</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="roadmap-section section-wrap">
          <div className="section-heading centered">
            <span className="eyebrow">OUR ROADMAP</span>

            <h2>
              Growing step by
              <em> step.</em>
            </h2>

            <p>
              From a focused launch to a smarter agriculture ecosystem.
            </p>
          </div>

          <div className="roadmap">
            {[
              ["01", "MVP", "Build the core farmer and supplier experience"],
              ["02", "Pilot", "Test with selected farmers and partners"],
              ["03", "District Expansion", "Reach more farming communities"],
              ["04", "AI Features", "Explore smart farm support tools"],
            ].map((item) => (
              <div className="roadmap-item" key={item[0]}>
                <span>{item[0]}</span>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
              </div>
            ))}
          </div>

          <div className="future-pills">
            <span>🌦️ Weather Updates</span>
            <span>🔬 Disease Detection</span>
            <span>🛍️ Marketplace</span>
            <span>📔 Farm Diary</span>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section section-wrap">
          <div className="cta-content">
            <span className="eyebrow">LET'S GROW TOGETHER</span>

            <h2>
              A stronger future starts
              <em> at the farm.</em>
            </h2>

            <p>
              AgriDirect — local agriculture commerce and support,
              built around farmers.
            </p>

            <button
              className="white-button"
              onClick={() => scrollTo("marketplace")}
            >
              Explore AgriDirect →
            </button>
          </div>

          <div className="cta-plant">🌾</div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          🌾 Agri<span>Direct</span>
        </a>

        <p>
          Supporting local agriculture, one connection at a time.
        </p>

        <span>© 2026 AgriDirect</span>
      </footer>
    </div>
  );
}

export default App;
