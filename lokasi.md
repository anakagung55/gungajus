---
layout: default
title: Lokasi
permalink: /lokasi/
---
<style>
html, body {
  overflow-x: hidden;
}
#ai-bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  background: radial-gradient(circle at center, #0a0a0a, #050505);
}
#ai-bg canvas {
  width: 100%;
  height: 100%;
}
</style>

<div id="ai-bg">
  <canvas id="particles"></canvas>
</div>

<script>
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = Array.from({ length: 90 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dx: (Math.random() - 0.5) * 0.6,
  dy: (Math.random() - 0.5) * 0.6
}));

(function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(180,180,255,0.8)";
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#6f78ff";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animate);
})();
</script>

<!-- ================= NAVBAR  ================= -->
<style>
/* NAVBAR FUTURISTIK */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: 14px 0;
  transition: background 0.35s ease, box-shadow 0.35s ease;
  backdrop-filter: blur(10px);
}

/* Normal (transparan) */
.navbar:not(.scrolled) {
  background: rgba(0, 0, 0, 0.25);
  box-shadow: none;
}

/* Saat scroll → aktif neon */
.navbar.scrolled {
  background: linear-gradient(135deg, #1976ff55, #a431ff55);
  box-shadow: 
    0 0 12px rgba(77, 97, 255, .6),
    0 0 25px rgba(164, 49, 255, .4);
}

/* INNER CONTAINER */
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* BRAND */
.navbar-left {
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-shadow: 0 0 12px rgba(255,255,255,0.5);
}

/* MENU */
.navbar-right {
  display: flex;
  gap: 24px;
}

.navbar-right a {
  color: white;
  font-size: 15px;
  text-decoration: none;
  transition: 0.25s ease;
  padding: 4px 10px;
  border-radius: 8px;
}

/* Hover neon effect */
.navbar-right a:hover {
  background: linear-gradient(135deg, #1976ff, #a431ff);
  box-shadow:
    0 0 8px rgba(77, 97, 255, .6),
    0 0 16px rgba(164, 49, 255, .5);
  transform: translateY(-2px);
}

/* OFFSET CONTENT BELOW NAVBAR */
.header-offset {
  margin-top: 90px;
}

/* RESPONSIVE NAVBAR */
@media (max-width: 768px) {
  .nav-inner {
    flex-direction: column;
    gap: 10px;
  }
  .navbar-right {
    gap: 14px;
  }
  .navbar-left {
    font-size: 18px;
  }
}
</style>

<div class="navbar">
  <div class="nav-inner">
    <div class="navbar-left">Aju's Blog</div>
    <div class="navbar-right">
      <a href="{{ site.baseurl }}/">Blog</a>
      <a href="{{ site.baseurl }}/galeri">Galeri</a>
      <a href="https://anakagung55.github.io/Portfolio/">Tentang</a>
      <a href="{{ site.baseurl }}/lokasi">Lokasi</a>
    </div>
  </div>
</div>

<div class="header-offset"></div>

<script>
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});
</script>
<style>
.location-wrap {
  max-width: 1100px;
  margin: 80px auto;
  padding: 0 20px;
  color: #fff;
}
.location-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 12px;
}
.location-sub {
  text-align: center;
  opacity: .8;
  margin-bottom: 40px;
}
.map-card {
  background: rgba(30,34,40,.85);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,.45);
}
.map-card iframe {
  width: 100%;
  height: 420px;
  border: none;
  border-radius: 14px;
}
.address {
  margin-top: 20px;
  font-size: 15px;
  opacity: .85;
}
</style>

<section class="location-wrap">
  <h1 class="location-title">Lokasi Interlace Studies</h1>
  <p class="location-sub">
    Temukan kami dan kunjungi kantor Interlace Studies Bali
  </p>

  <div class="map-card">
    <iframe
      src="https://www.google.com/maps?q=Interlace%20Studies%20Bali&output=embed"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    <div class="address">
      📍 <strong><a href= "https://www.interlacestudies.id/"Interlace Studies Bali</a></strong><br>
      Denpasar, Bali, Indonesia
    </div>
  </div>
</section>
