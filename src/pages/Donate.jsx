import './Donate.css'
import cruzRojaImage from '../public/images/Cruz Roja.jpg'

function Donate() {
  return (
    <div className="donate-page">
      <div className="donate-background" style={{ backgroundImage: `linear-gradient(135deg, rgba(42, 95, 143, 0.4) 0%, rgba(26, 74, 115, 0.4) 100%), url(${cruzRojaImage})` }}>
        <div className="donate-card">
          <h1 className="donate-title">Donate</h1>
          <div className="donate-content">
            <p>
              The United Nations World Food Programme is providing critical food assistance to Jamaica. 
              Your donation helps deliver emergency food supplies to those most affected by Hurricane Melissa.
            </p>
            <p>
              The Red Cross in Panama is also working to support relief efforts for Jamaica during this difficult time. 
              Your contribution can help provide essential aid, medical assistance, and resources to those most affected.
            </p>
          </div>
          <div className="donate-buttons">
            <a 
              href="https://donate.wfp.org/1244/donation/single?campaign=5376&_ga=2.98259228.229581701.1761748160-2108795476.1761748159&_gac=1.257236473.1761748160.Cj0KCQjw9obIBhCAARIsAGHm1mSc-gfj_cWOqo-x6_qYXiTCKTE2gltzGFWPXP1vHQYJrQN8EHgfMc0aAqYFEALw_wcB" 
              target="_blank" 
              rel="noopener noreferrer"
              className="donate-button donate-button-un"
            >
              Donate to the United Nations
              <span className="arrow-icon">→</span>
            </a>
            <a 
              href="https://cruzroja.org.pa/donar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="donate-button"
            >
              Donate to the Red Cross in Panama
              <span className="arrow-icon">→</span>
            </a>
          </div>
          <div className="security-badge">
            <span>100% Secure Donation</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate

