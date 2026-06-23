import { useRef } from 'react';
import useScrollReveal from './useScrollReveal';
import './Owner.css';

export default function Owner() {
  useScrollReveal();
  const cardRef = useRef(null);

  // 3D tilt effect on mouse move
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)';
  };

  return (
    <section className="owner-section" id="owner">
      <div className="owner-inner">

        {/* Photo Card with 3D tilt */}
        <div className="owner-card-wrap reveal-left">
          <div
            className="owner-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-glow" />
            <img
              src="/owner.png"
              alt="MD ZABIULLAH — Owner"
              className="owner-photo"
            />
            <div className="card-badge">
              <span className="badge-icon">🏆</span>
              <span>10+ Saal Ka Tajurba</span>
            </div>
          </div>
          <div className="owner-name-plate reveal delay-2">
            <div className="owner-name">MD ZABIULLAH</div>
            <div className="owner-title">Founder & Head Mechanic</div>
          </div>
        </div>

        {/* Content */}
        <div className="owner-content reveal-right">
          <div className="sec-eye">Hamare Baare Mein</div>
          <h2 className="sec-h">Apni Bike Ko Sahi<br /><em>Haathon</em> Mein Dein</h2>
          <div className="glow-line" />
          <p className="sec-p">
            Mantu ji ka workshop Gadhimai, Nepal ka sabse trusted bike service center hai.
            10 saal se zyada ke anubhav ke saath, unhone hazaron bikes ko nayi zindagi di hai.
            Har kaam mein woh apna dil lagate hain — chaahe tyre puncture ho ya engine overhaul.
          </p>
          <p className="sec-p" style={{ marginTop: '1rem' }}>
            "Mera kaam meri zubaan hai — jab aapki bike workshop se nikalti hai, toh woh bilkul
            sahi hoti hai. Yahi meri guarantee hai."
          </p>
          <div className="owner-quote">"Quality, Trust, Performance — yahi haara vaada hai."</div>

          <div className="owner-creds">
            <div className="cred reveal delay-1">
              <span className="cred-num">5K+</span>
              <span className="cred-label">Bikes Serviced</span>
            </div>
            <div className="cred reveal delay-2">
              <span className="cred-num">100%</span>
              <span className="cred-label">Satisfaction</span>
            </div>
            <div className="cred reveal delay-3">
              <span className="cred-num">6+</span>
              <span className="cred-label">Services Available</span>
            </div>
          </div>

          <div className="owner-contact-btns reveal delay-4">
            <a href="tel:9804230569" className="ocb-call">📞 Call Karein</a>
            <a
              href="https://wa.me/9829442027?text=Namaste%20Mantu%20ji%2C%20bike%20service%20chahiye"
              className="ocb-wa"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
