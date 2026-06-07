import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
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
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Products</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
        </nav>
        <Link to="/contact" className="button button-primary">Request Quote</Link>
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-mark">LIAM6</span>
            <p>Premium ginger and dry ginger exports for spice traders, wholesalers, and food brands worldwide.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Products</h4>
              <Link to="/products">Fresh Ginger</Link>
              <Link to="/products">Dry Ginger</Link>
              <Link to="/products">Coffee & Pepper</Link>
              <Link to="/products">Packaging Options</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link to="/about">About LIAM6</Link>
              <Link to="/about">Our Mission</Link>
              <Link to="/about">Certifications</Link>
            </div>
            <div>
              <h4>Trade</h4>
              <Link to="/contact">Get a Quote</Link>
              <Link to="/contact">Export Process</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 LIAM6 Exports & Agro. All rights reserved.</span>
          <div className="footer-meta">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
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
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}