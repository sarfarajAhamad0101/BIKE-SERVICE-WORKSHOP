import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import useScrollReveal from './useScrollReveal';
import './WheelSection.css';

export default function WheelSection() {
  const canvasRef = useRef(null);
  useScrollReveal();

  useEffect(() => {
    const canvas = canvasRef.current;
    const W = canvas.clientWidth || 460;
    const H = canvas.clientHeight || 460;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    // ── Materials ──
    const matRim    = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.95, roughness: 0.15 });
    const matOrange = new THREE.MeshStandardMaterial({ color: 0xff6b00, metalness: 0.6, roughness: 0.3, emissive: 0xff4400, emissiveIntensity: 0.15 });
    const matTyre   = new THREE.MeshStandardMaterial({ color: 0x0d0d0d, metalness: 0.05, roughness: 0.95 });
    const matHub    = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 1.0, roughness: 0.05 });
    const matSilver = new THREE.MeshStandardMaterial({ color: 0x777777, metalness: 0.85, roughness: 0.25 });

    const wheelGroup = new THREE.Group();

    // Outer tyre
    const tyre = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.4, 28, 100), matTyre);
    wheelGroup.add(tyre);

    // Tyre tread bumps
    for (let i = 0; i < 42; i++) {
      const ang = (i / 42) * Math.PI * 2;
      const bump = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.07, 0.44), matTyre);
      bump.position.set(Math.cos(ang) * 1.7, Math.sin(ang) * 1.7, 0);
      bump.rotation.z = ang;
      wheelGroup.add(bump);
    }

    // Rim disc
    const rimDisc = new THREE.Mesh(
      (() => { const g = new THREE.CylinderGeometry(1.3, 1.3, 0.14, 72); g.rotateX(Math.PI/2); return g; })(),
      matRim
    );
    wheelGroup.add(rimDisc);

    // Rim outer ring
    wheelGroup.add(new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.07, 14, 72), matSilver));

    // Orange accent ring
    wheelGroup.add(new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.028, 10, 72), matOrange));

    // 5 spokes
    for (let i = 0; i < 5; i++) {
      const ang = (i / 5) * Math.PI * 2;
      // Inner spoke
      const s1Geo = new THREE.CylinderGeometry(0.038, 0.028, 0.85, 8);
      const s1 = new THREE.Mesh(s1Geo, matSilver);
      s1.position.set(Math.cos(ang) * 0.425, Math.sin(ang) * 0.425, 0);
      s1.rotation.z = ang + Math.PI / 2;
      s1.rotation.x = Math.PI / 2;
      wheelGroup.add(s1);
      // Outer spoke (orange tipped)
      const s2Geo = new THREE.CylinderGeometry(0.028, 0.038, 0.44, 8);
      const s2 = new THREE.Mesh(s2Geo, matOrange);
      s2.position.set(Math.cos(ang) * 1.08, Math.sin(ang) * 1.08, 0);
      s2.rotation.z = ang + Math.PI / 2;
      s2.rotation.x = Math.PI / 2;
      wheelGroup.add(s2);
    }

    // Hub
    const hub = new THREE.Mesh(
      (() => { const g = new THREE.CylinderGeometry(0.22, 0.22, 0.2, 32); g.rotateX(Math.PI/2); return g; })(),
      matHub
    );
    wheelGroup.add(hub);

    // Hub bolts
    for (let i = 0; i < 5; i++) {
      const ang = (i / 5) * Math.PI * 2;
      const boltGeo = new THREE.CylinderGeometry(0.038, 0.038, 0.22, 8);
      boltGeo.rotateX(Math.PI / 2);
      const bolt = new THREE.Mesh(boltGeo, matOrange);
      bolt.position.set(Math.cos(ang) * 0.14, Math.sin(ang) * 0.14, 0);
      wheelGroup.add(bolt);
    }

    // Center axle (glowing orange)
    const axle = new THREE.Mesh(
      (() => { const g = new THREE.CylinderGeometry(0.07, 0.07, 0.35, 16); g.rotateX(Math.PI/2); return g; })(),
      new THREE.MeshStandardMaterial({ color: 0xff6b00, metalness: 0.6, roughness: 0.2, emissive: 0xff3300, emissiveIntensity: 0.4 })
    );
    wheelGroup.add(axle);

    scene.add(wheelGroup);

    // ── Lighting ──
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const frontL = new THREE.DirectionalLight(0xffffff, 0.9);
    frontL.position.set(3, 4, 5);
    scene.add(frontL);
    const rimL = new THREE.DirectionalLight(0xff6b00, 0.7);
    rimL.position.set(-4, -3, -2);
    scene.add(rimL);
    const topL = new THREE.PointLight(0xff9a3c, 1.0, 12);
    topL.position.set(0, 4, 3);
    scene.add(topL);

    // ── Mouse / Touch Drag ──
    let isDragging = false;
    let prev = { x: 0, y: 0 };
    let rotX = -0.3, rotY = 0, velX = 0, velY = 0.009;

    canvas.addEventListener('mousedown', e => { isDragging = true; prev = { x: e.clientX, y: e.clientY }; velX = 0; velY = 0; });
    canvas.addEventListener('touchstart', e => { isDragging = true; prev = { x: e.touches[0].clientX, y: e.touches[0].clientY }; velX = 0; velY = 0; }, { passive: true });
    window.addEventListener('mouseup', () => isDragging = false);
    window.addEventListener('touchend', () => isDragging = false);
    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      velY = (e.clientX - prev.x) * 0.009;
      velX = (e.clientY - prev.y) * 0.009;
      rotY += velY; rotX += velX;
      prev = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('touchmove', e => {
      if (!isDragging) return;
      velY = (e.touches[0].clientX - prev.x) * 0.009;
      velX = (e.touches[0].clientY - prev.y) * 0.009;
      rotY += velY; rotX += velX;
      prev = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    // ── Resize ──
    const onResize = () => {
      const nW = canvas.clientWidth, nH = canvas.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener('resize', onResize);

    // ── Render loop ──
    let animId;
    function animate() {
      animId = requestAnimationFrame(animate);
      if (!isDragging) {
        velY *= 0.94;
        velX *= 0.94;
        if (Math.abs(velY) < 0.001) velY = 0.009;
      }
      rotY += velY;
      rotX += velX;
      rotX = Math.max(-1.1, Math.min(1.1, rotX));
      wheelGroup.rotation.y = rotY;
      wheelGroup.rotation.x = rotX;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="wheel-section" id="wheel">
      <div className="wheel-inner">
        <div className="wheel-canvas-wrap reveal-left">
          <canvas ref={canvasRef} className="wheel-canvas" />
          <div className="drag-hint">🖱️ Drag to rotate</div>
        </div>

        <div className="wheel-content reveal-right">
          <div className="sec-eye">3D Expert Workshop</div>
          <h2 className="sec-h">Har <em>Tyre</em> Ka<br />Maahir</h2>
          <div className="glow-line" />
          <p className="sec-p">
            Mantu ji ko bikes aur tyres ki gehri samajh hai. Upar wheel ghuma ke dekhein —
            aise hi hum har angle se aapki bike check karte hain.
          </p>

          <div className="feat-list">
            {[
              { icon: '🛞', title: 'Sabhi Brand Ka Tyre', sub: 'Hero, Honda, Bajaj, TVS, Royal Enfield, Yamaha' },
              { icon: '⚡', title: 'Same Day Service',    sub: 'Zyada tar kaam usi din complete hota hai' },
              { icon: '💰', title: 'Best Daam Guarantee', sub: 'Seedha rate, koi hidden charge nahi' },
              { icon: '🔩', title: 'Original Spare Parts', sub: 'Sirf genuine parts ka istemal' },
            ].map((f, i) => (
              <div className={`feat reveal delay-${i + 1}`} key={i}>
                <div className="feat-icon">{f.icon}</div>
                <div className="feat-t">
                  <strong>{f.title}</strong>
                  <span>{f.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
