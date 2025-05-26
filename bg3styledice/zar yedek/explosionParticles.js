// Kaotik kırmızı patlama efekti (başarısızlık animasyonu)
window.createFailExplosion = function(x, y, particleCount = 32) {
  const redPalette = [
    "radial-gradient(circle at 40% 35%, #ff5555 40%, #a30808 100%)",
    "radial-gradient(circle at 60% 65%, #ff9d55 30%, #b5311b 100%)",
    "radial-gradient(circle at 30% 60%, #d50000 20%, #4c060a 100%)",
    "radial-gradient(circle at 50% 40%, #ff3131 40%, #720505 100%)",
    "radial-gradient(circle at 40% 60%, #fff1 10%, #b74f0f90 90%)",
    "radial-gradient(circle at 50% 70%, #c13c1e99 10%, #ff8e4270 100%)",
    "radial-gradient(circle at 50% 40%, #7c040480 10%, #24010180 90%)"
  ];

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'explosion-particle-fail';

    // Boyut ve tip
    let size = Math.random() < 0.22 ? (Math.random() * 17 + 18) : (Math.random() * 7 + 8);
    if (Math.random() < 0.12) size = Math.random() * 36 + 22; // Büyük ve dağınık duman

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Renk seç
    particle.style.background = redPalette[Math.floor(Math.random() * redPalette.length)];

    // Kaotik açı ve hız
    let angle = Math.random() * Math.PI * 2 + Math.sin(i*2) * 0.8;
    let baseSpeed = Math.random() < 0.16 ? (Math.random() * 22 + 15) : (Math.random() * 105 + 25);
    if (Math.random() < 0.09) baseSpeed = Math.random() * 170 + 35;
    let dx = Math.cos(angle) * baseSpeed * (Math.random()*0.5+0.7);
    let dy = Math.sin(angle) * baseSpeed * (Math.random()*0.75+0.6);

    if (Math.random() < 0.22) {
      dx *= 0.7;
      dy *= 1.45;
    }

    particle.style.left = `${x - size/2}px`;
    particle.style.top = `${y - size/2}px`;

    const scale = Math.random() * 0.44 + 0.68;
    particle.style.opacity = Math.random() < 0.17 ? 0.38 : (Math.random()*0.33+0.64);

    document.body.appendChild(particle);
    setTimeout(() => {
      particle.style.transition = "transform 1.05s cubic-bezier(.22,.95,.41,1.11), opacity 0.84s";
      particle.style.transform = `translate(${dx}px, ${dy}px) scale(${scale}) rotate(${Math.random()*80-40}deg)`;
      particle.style.opacity = 0;
      particle.style.filter = "blur(2.5px)";
    }, 16 + Math.random()*55);

    setTimeout(() => {
      if (particle.parentNode) particle.parentNode.removeChild(particle);
    }, 1100 + Math.random() * 220);
  }
}
