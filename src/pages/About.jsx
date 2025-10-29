import './About.css'
import jamaicaImage from '../public/images/Jamaica-2025.jpg'

function About() {
  return (
    <div className="about">
      <h1 className="page-title">Team Jamaica</h1>

      <div className="team-section">
        <div className="team-content">
          <p>
            Team Jamaica is a group of passionate young innovators who spent months designing 
            and building an extraordinary robot for the FIRST Global Challenge. Their project 
            reflects teamwork, creativity, and a shared commitment to solving real problems 
            through technology. Although they were unable to attend the competition this year 
            because of the catastrophic events that struck their country, they have shown 
            remarkable strength in how they continue to move forward. The team remains united, 
            focused, and determined to keep learning and creating despite the challenges they 
            face, and they are currently fighting the unfortunate events that continue to affect 
            their community.
          </p>
        </div>
        <div className="team-image">
          <img src={jamaicaImage} alt="Team Jamaica 2025" />
        </div>
      </div>

      <div className="contact-section">
        <h2 className="contact-title">Contact Them</h2>
        <div className="contact-info">
          <p>
            Due to the widespread power outage across Jamaica following Hurricane Melissa, 
            communication with Team Jamaica FGC has been significantly limited. However, 
            you may attempt to reach out to them through their official Instagram account 
            when connectivity allows.
          </p>
          <p>
            <strong>Instagram:</strong>{' '}
            <a
              href="https://www.instagram.com/fgc_jamaica?igsh=MXJqeXB0Z29hZGpxbw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              @fgc_jamaica
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

