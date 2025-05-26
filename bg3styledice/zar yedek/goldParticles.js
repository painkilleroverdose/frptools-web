// goldParticles.js

function createGoldParticles(x, y) {
  const particles = [];
  const count = 28 + Math.floor(Math.random() * 8);
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = 3.2 + Math.random() * 2.1;
    const velocity = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed
    };
    const size = 7 + Math.random() * 4;
    const opacity = 0.75 + Math.random() * 0.25;

    const el = document.createElement('div');
    el.className = 'particle';
    el.style.width = el.style.height = size + 'px';
    el.style.opacity = opacity;
    el.style.left = (x - size / 2) + 'px';
    el.style.top = (y - size / 2) + 'px';

    document.body.appendChild(el);

    particles.push({
      el,
      x: x - size/2,
      y: y - size/2,
      velocity,
      opacity,
      size,
      life: 0,
      maxLife: 1.2 + Math.random() * 0.7 // saniye
    });
  }

  function animateParticles() {
    for (let i = particles.length-1; i >= 0; i--) {
      const p = particles[i];
      p.velocity.x *= 0.97;
      p.velocity.y *= 0.97;
      p.x += p.velocity.x;
      p.y += p.velocity.y;
      p.life += 1/60;
      const progress = p.life / p.maxLife;
      p.el.style.opacity = Math.max(0, p.opacity * (1 - progress));
      p.el.style.transform = `translate(${p.x - parseFloat(p.el.style.left)}px, ${p.y - parseFloat(p.el.style.top)}px) scale(${1 - progress * 0.5})`;

      if (progress >= 1) {
        p.el.remove();
        particles.splice(i, 1);
      }
    }
    if (particles.length) requestAnimationFrame(animateParticles);
  }
  animateParticles();
}
