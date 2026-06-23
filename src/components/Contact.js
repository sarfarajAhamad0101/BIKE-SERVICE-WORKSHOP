import useScrollReveal from './useScrollReveal';
import './Contact.css';

export default function Contact() {
  useScrollReveal();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">

        {/* Left: Contact Info */}
        <div className="reveal-left">
          <div className="sec-eye">Sampark Karein</div>
          <h2 className="sec-h">Hum Se <em>Milein</em></h2>
          <div className="glow-line" />

          <div className="contact-items">

            {/* CALL */}
            <a href="tel:9804230569" className="c-item c-item--link">
              <div className="c-ico">📞</div>
              <div className="c-detail">
                <strong>Call Karein</strong>
                <span className="c-value">+977 9804230569</span>
                <em>Tap karke seedha call karein</em>
              </div>
              <div className="c-arrow">→</div>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/9829442027?text=Namaste%20Mantu%20ji%2C%20mujhe%20bike%20service%20chahiye"
              className="c-item c-item--link c-item--wa"
              target="_blank"
              rel="noreferrer"
            >
              <div className="c-ico">💬</div>
              <div className="c-detail">
                <strong>WhatsApp</strong>
                <span className="c-value">+977 9829442027</span>
                <em>Message karein, reply milegi</em>
              </div>
              <div className="c-arrow">→</div>
            </a>

            {/* ADDRESS */}
            <a
              href="https://www.google.com/maps/dir//Mantu+Motorcycle+%26+Tyre+Repairing,+Gadhimai+44412,+Nepal"
              className="c-item c-item--link"
              target="_blank"
              rel="noreferrer"
            >
              <div className="c-ico">📍</div>
              <div className="c-detail">
                <strong>Hamara Pata</strong>
                <span className="c-value">Gadhimai 44412, Bara, Nepal</span>
                <em>Tap karke directions lein</em>
              </div>
              <div className="c-arrow">→</div>
            </a>

            {/* TIMINGS */}
            <div className="c-item">
              <div className="c-ico">🕐</div>
              <div className="c-detail">
                <strong>Khulne Ka Waqt</strong>
                <span className="c-value">24X7</span>
                <em>Roz khulaata hai, Sunday bhi</em>
              </div>
            </div>
          </div>

          {/* Big WhatsApp CTA */}
          <a
            href="https://wa.me/9829442027?text=Namaste%20Mantu%20ji%2C%20mujhe%20bike%20service%20chahiye"
            className="wa-big reveal delay-2"
            target="_blank"
            rel="noreferrer"
          >
            <span className="wa-ico">💬</span>
            WhatsApp Par Book Karein
          </a>
        </div>

        {/* Right: Map */}
        <div className="map-wrap reveal-right">
          <div className="map-header">
            <span>📍 Hamari Location</span>
            <a
              href="https://www.google.com/maps/dir//Mantu+Motorcycle+%26+Tyre+Repairing,+Gadhimai+44412,+Nepal"
              target="_blank"
              rel="noreferrer"
            >
              Directions →
            </a>
          </div>
          <iframe
            title="Mantu Motorcycle Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0!2d84.9689375!3d27.1491875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb55ab8343f06f%3A0x39780d2e1ee3e4f9!2sMantu%20Motorcycle%20%26%20Tyre%20Repairing!5e0!3m2!1sen!2snp!4v1718000000000"
            allowFullScreen=""
            loading="lazy"
          />
          <div className="map-footer">
            <span>Gadhimai, Bara, Nepal</span>
          </div>
        </div>

      </div>
    </section>
  );
}
