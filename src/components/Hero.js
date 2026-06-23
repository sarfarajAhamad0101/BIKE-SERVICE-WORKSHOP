import { useEffect } from 'react';
import useScrollReveal from './useScrollReveal';
import './Hero.css';

export default function Hero() {
  useScrollReveal();

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('.hero-content');
      if (hero) hero.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-tag reveal">🔧 Nepal Ki Sabse Bharosemand Bike Workshop</div>

        <h1 className="hero-title reveal delay-1">
          <span className="t1">Mantu</span>
          <span className="t2">Motorcycle</span>
          <span className="t3">&amp; Tyre Repairing</span>
        </h1>

        <p className="hero-sub reveal delay-2">
          Gadhimai, Nepal — Engine service, tyre repair, electrical work.<br />
          Har tarah ki bike ka kaam ek jagah par, experienced haathon se.
        </p>

        <div className="hero-btns reveal delay-3">
          <a href="#services" className="btn-fire">Services Dekhein</a>
          <a href="tel:9804230569" className="btn-ghost">📞 9804230569</a>
        </div>

        <div className="hero-stats reveal delay-4">
          <div className="stat">
            <span className="stat-n">10+</span>
            <span className="stat-l">Saal Tajurba</span>
          </div>
          <div className="stat">
            <span className="stat-n">5K+</span>
            <span className="stat-l">Bikes Fixed</span>
          </div>
          <div className="stat">
            <span className="stat-n">24/7</span>
            <span className="stat-l">Emergency</span>
          </div>
          <div className="stat">
            <span className="stat-n">100%</span>
            <span className="stat-l">Guarantee</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
