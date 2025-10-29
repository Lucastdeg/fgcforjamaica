import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>FGC for Jamaica</h1>
        </Link>
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/fgc" 
            className={`nav-link ${isActive('/fgc') ? 'active' : ''}`}
          >
            FGC
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/donate" 
            className={`nav-link ${isActive('/donate') ? 'active' : ''}`}
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

