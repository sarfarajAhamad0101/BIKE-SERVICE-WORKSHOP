import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="ft-inner">
        <div className="ft-brand">🏍️ Mantu Motorcycle & Tyre Repairing</div>
        <div className="ft-line" />
        <div className="ft-links">
          <a href="tel:9804230569">📞 9804230569</a>
          <a href="https://wa.me/9829442027" target="_blank" rel="noreferrer">💬 9829442027</a>
          <a href="https://www.google.com/maps/dir//Mantu+Motorcycle+%26+Tyre+Repairing,+Gadhimai+44412,+Nepal" target="_blank" rel="noreferrer">📍 Gadhimai, Nepal</a>
        </div>
        <div className="ft-copy">© 2024 Mantu Motorcycle & Tyre Repairing · Sab haq surakshit hain</div>
      </div>
    </footer>
  );
}
