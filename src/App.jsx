import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Donate from './pages/Donate'
import About from './pages/About'
import FGC from './pages/FGC'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
            <Route path="/fgc" element={<FGC />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

