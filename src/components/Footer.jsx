import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li><a href="https://www.instagram.com/fgc_jamaica?igsh=MXJqeXB0Z29hZGpxbw==" target="_blank" rel="noopener noreferrer">Team Jamaica Instagram</a></li>
              <li><a href="https://donate.wfp.org/1244/donation/single?campaign=5376&_ga=2.98259228.229581701.1761748160-2108795476.1761748159&_gac=1.257236473.1761748160.Cj0KCQjw9obIBhCAARIsAGHm1mSc-gfj_cWOqo-x6_qYXiTCKTE2gltzGFWPXP1vHQYJrQN8EHgfMc0aAqYFEALw_wcB" target="_blank" rel="noopener noreferrer">Donate to United Nations</a></li>
              <li><a href="https://cruzroja.org.pa/donar/" target="_blank" rel="noopener noreferrer">Donate to Red Cross</a></li>
            </ul>
          </div>
          <div className="footer-section credits-section">
            <h3>Credits</h3>
            <p>Team Panama FGC</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} FGC for Jamaica. A non-profit initiative to bring awareness.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

