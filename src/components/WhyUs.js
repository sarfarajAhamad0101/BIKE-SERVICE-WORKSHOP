import useScrollReveal from './useScrollReveal';
import './WhyUs.css';

const CARDS = [
  { icon: '⚡', title: 'Ultra Fast',   desc: 'Zyada tar repairs 1-2 ghante mein. Aapka waqt keemti hai.' },
  { icon: '🏆', title: '10+ Saal',     desc: 'Das saal se Gadhimai ki pehchan. Hazaron satisfied customers.' },
  { icon: '✅', title: 'Guarantee',    desc: 'Kaam ka guarantee — koi problem aaye toh wapas aao, free fix.' },
  { icon: '🌙', title: 'Emergency',    desc: 'Raat ko bhi zaroorat pade toh call karein. Hum available hain.' },
];

export default function WhyUs() {
  useScrollReveal();

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y - rect.height / 2) / rect.height) * -15;
    const rotY = ((x - rect.width / 2) / rect.width) * 15;
    card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (card) => {
    card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <section className="whyus-section">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="center reveal">
          <div className="sec-eye">Kyun Chunein Hume</div>
          <h2 className="sec-h">Haari <em>Khasiyat</em></h2>
        </div>

        <div className="why-grid">
          {CARDS.map((c, i) => (
            <div
              className={`why-card reveal delay-${i + 1}`}
              key={i}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="why-glow" />
              <div className="why-icon">{c.icon}</div>
              <div className="why-title">{c.title}</div>
              <div className="why-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
