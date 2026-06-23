import useScrollReveal from './useScrollReveal';
import './Services.css';

const SERVICES = [
  { icon: '🔧', name: 'Full Service',       desc: 'Engine oil, filter, chain lubrication, aur poori bike check-up — sab ek saath.',        num: '01' },
  { icon: '🛞', name: 'Tyre Repairing',     desc: 'Puncture repair, tyre change, tube fitting — kisi bhi size ke liye, bahut tezi se.',     num: '02' },
  { icon: '⚙️', name: 'Engine Overhaul',    desc: 'Piston ring, valve grinding, complete engine rebuild — sab expert hands se.',            num: '03' },
  { icon: '🔋', name: 'Electrical Work',    desc: 'Battery, wiring, lights, indicators — sab electrical problems yahan solve hoti hain.',   num: '04' },
  { icon: '🛑', name: 'Brake Service',      desc: 'Brake pad, wire, disc aur drum brake dono ki expert repair aur adjustment.',             num: '05' },
  { icon: '🔩', name: 'Body & Wash',        desc: 'Deep cleaning, denting, plastic repair aur general maintenance.',                        num: '06' },
];

export default function Services() {
  useScrollReveal();

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header center reveal">
          <div className="sec-eye">Hamare Kaam</div>
          <h2 className="sec-h">Sabhi <em>Services</em></h2>
          <p className="sec-p">Har kism ki bike problem ka solution — ek hi jagah par.</p>
        </div>

        <div className="srv-grid">
          {SERVICES.map((s, i) => (
            <div
              className={`srv-card reveal delay-${(i % 3) + 1}`}
              key={i}
            >
              <span className="srv-bg-num">{s.num}</span>
              <span className="srv-ico">{s.icon}</span>
              <div className="srv-name">{s.name}</div>
              <div className="srv-desc">{s.desc}</div>
              <div className="srv-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
