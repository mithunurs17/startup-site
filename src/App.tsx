import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { useEffect, useState } from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app-shell">
      <header className={`site-header ${scrolled ? 'header-elevated' : ''}`}>
        <div className="brand-mark">
          <Link to="/">LIAM6</Link>
        </div>
        <nav className="site-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
        <Link to="/contact" className="button button-primary">
          Get Started
        </Link>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-mark small">LIAM6</div>
            <p>
              Premium ginger and dry ginger exports for spice traders, wholesalers, and food brands worldwide.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="/products">Ginger Products</a>
              <a href="/products">Dry Ginger Grades</a>
              <a href="/products">Packaging Options</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="/about">About LIAM6</a>
              <a href="/about">Our Farmer Network</a>
              <a href="/about">Certifications</a>
            </div>
            <div>
              <h4>Resources</h4>
              <a href="/contact">Export Process</a>
              <a href="/contact">FAQs</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 LIAM6 Exports & Agro. All rights reserved.</span>
          <div className="footer-meta">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/products"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
