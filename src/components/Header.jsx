import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, MessageCircle } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const headerClass = `header-container ${scrolled || !isHomePage ? 'scrolled' : ''}`;

  return (
    <>
      <header className={headerClass}>
        <div className="header-content">
          <Link to="/" className="header-logo" onClick={closeMobileMenu}>
            <span className="logo-title">QARAT</span>
            <span className="subtitle">Interior Decorator</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            
            <div className="dropdown-container">
              <span className="dropdown-toggle">
                Interior Work <ChevronDown size={14} />
              </span>
              <div className="dropdown-menu">
                <Link to="/interior-work/ceiling-work" className="dropdown-item">Ceiling Work</Link>
                <Link to="/interior-work/wall-decorative-work" className="dropdown-item">Wall & Decorative Work</Link>
                <Link to="/interior-work/modular-kitchen-furniture" className="dropdown-item">Modular Kitchen & Furniture</Link>
              </div>
            </div>

            <div className="dropdown-container">
              <span className="dropdown-toggle">
                Material Supply <ChevronDown size={14} />
              </span>
              <div className="dropdown-menu">
                <Link to="/material-supply/gypsum-boards-ceiling-materials" className="dropdown-item">Gypsum Tiles False Ceiling</Link>
                <Link to="/material-supply/panels" className="dropdown-item">Panels</Link>
                <Link to="/material-supply/decorative-materials" className="dropdown-item">PVC TV Unit</Link>
              </div>
            </div>

            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/about" className="nav-link">About</Link>
            
            <Link to="/get-quote" className="header-quote-btn">Get Quote</Link>
          </nav>

          {/* Mobile Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <div className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`} onClick={closeMobileMenu}></div>
      <div className={`mobile-nav-panel ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-close-btn" onClick={closeMobileMenu}>
          <X size={24} />
        </button>
        
        <div className="mobile-nav-links">
          <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
          
          <div>
            <Link to="/interior-work" className="mobile-nav-link" style={{border: 'none', paddingBottom: 0}} onClick={closeMobileMenu}>Interior Work</Link>
            <div className="mobile-nav-group-title">Services</div>
            <Link to="/interior-work/ceiling-work" className="mobile-sub-link" onClick={closeMobileMenu}>Ceiling Work</Link>
            <Link to="/interior-work/wall-decorative-work" className="mobile-sub-link" onClick={closeMobileMenu}>Wall & Decorative Work</Link>
            <Link to="/interior-work/modular-kitchen-furniture" className="mobile-sub-link" onClick={closeMobileMenu}>Modular Kitchen & Furniture</Link>
          </div>

          <div>
            <Link to="/material-supply" className="mobile-nav-link" style={{border: 'none', paddingBottom: 0}} onClick={closeMobileMenu}>Material Supply</Link>
            <div className="mobile-nav-group-title">Products</div>
            <Link to="/material-supply/gypsum-boards-ceiling-materials" className="mobile-sub-link" onClick={closeMobileMenu}>Gypsum Tiles False Ceiling</Link>
            <Link to="/material-supply/panels" className="mobile-sub-link" onClick={closeMobileMenu}>Panels</Link>
            <Link to="/material-supply/decorative-materials" className="mobile-sub-link" onClick={closeMobileMenu}>PVC TV Unit</Link>
          </div>

          <Link to="/projects" className="mobile-nav-link" onClick={closeMobileMenu}>Projects</Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>About</Link>
        </div>

        <div className="mobile-contact-area">
          <Link to="/get-quote" className="mobile-quote-btn" onClick={closeMobileMenu}>Get Quote</Link>
          <a href="tel:09336411421" className="mobile-action-btn"><Phone size={18} /> Call Us</a>
          <a href="https://wa.me/919336411421" className="mobile-action-btn"><MessageCircle size={18} /> WhatsApp</a>
        </div>
      </div>
    </>
  );
};

export default Header;
