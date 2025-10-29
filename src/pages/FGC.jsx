import './FGC.css'
import communityVideo from '../public/Video/community.mp4'

function FGC() {
  return (
    <div className="fgc">
      <h1 className="page-title">FGC Community Support</h1>

      <div className="video-section">
        <div className="video-container">
          <video 
            className="fgc-video"
            controls
          >
            <source src={communityVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="fgc-message">
          <p>
            The FIRST Global Challenge community extends its heartfelt wishes for Jamaica to remain strong 
            and resilient during this challenging time. For more information about FIRST Global and its 
            mission to empower the next generation of global changemakers through the sport of robotics, 
            please visit{' '}
            <a 
              href="https://first.global/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              first.global
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FGC

