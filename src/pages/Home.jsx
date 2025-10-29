import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import jamaicaTeam from '../public/images/Jamaica-2025.jpg'
import devastation1 from '../public/images/Devastation1.jpg'
import devastation2 from '../public/images/Devastatation2.jpg'
import devastation3 from '../public/images/Devastation3.jpg'
import devastation4 from '../public/images/Devastation4.jpg'

function Home() {
  const images = [jamaicaTeam, devastation1, devastation2, devastation3, devastation4]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="home">
      {/* Hero Image Carousel with Text Overlay */}
      <div className="hero-image-section">
        <div className="carousel-container">
          <div 
            className="carousel-slider"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={index === 0 ? 'Team Jamaica 2025' : `Devastation ${index}`} />
              </div>
            ))}
          </div>
          <div className="carousel-overlay">
            <h1 className="hero-overlay-text">Support Jamaica during this difficult time</h1>
          </div>
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bolded Title Section */}
      <div className="title-section">
        <h2 className="section-title">Standing Together in Crisis</h2>
      </div>

      {/* Text Content */}
      <div className="text-section">
        <p>
          Jamaica has been devastated by Hurricane Melissa, the strongest storm to 
          strike the island in modern history. With sustained winds of 298 km/h 
          (185 mph), stronger than Hurricane Katrina, this Category 5 hurricane 
          barreled across Jamaica on Tuesday, October 28, 2025, leaving behind 
          a trail of catastrophic destruction.
        </p>
        <p>
          About three-quarters of the island is without power, and many communities 
          across Jamaica's western side are under water. Montego Bay, the heart of 
          Jamaica's tourism industry, has been split in two by floodwaters. Thousands 
          of families have lost their homes, and entire parishes are cut off from 
          the rest of the island. Prime Minister Andrew Holness has declared the 
          entire island a "disaster area." The Fighting Game Community stands 
          together with Jamaica during this critical time of recovery.
        </p>
      </div>

      {/* Action Buttons Section */}
      <div className="action-section">
        <Link to="/about" className="action-button half-button">
          Learn More About Team Jamaica
        </Link>
        <Link to="/donate" className="action-button half-button primary">
          Donate Now
        </Link>
      </div>
    </div>
  )
}

export default Home

