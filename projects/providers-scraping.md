---
layout: default
title: "Providers Scraping System"
permalink: /projects/providers-scraping
category: Data Engineering
tools: Python, BeautifulSoup, SQL
year: 2025
---

<!-- ================= AI PARTICLE BACKGROUND ================= -->
<style>
html, body {
  overflow-x: hidden !important;
  width: 100%;
}
#ai-bg {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: -1;
  background: radial-gradient(circle at center, #0a0a0a, #050505);
}
#ai-bg canvas {
  width: 100%;
  height: 100%;
  display: block;
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

const particles = [];
for (let i = 0; i < 90; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6
  });
}

(function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(180,180,255,0.8)";
    ctx.shadowBlur = 15;
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

<!-- ================= NAVBAR ================= -->
<div class="navbar">
  <div class="nav-inner">
    <div class="navbar-left">Aju's Blog</div>
    <div class="navbar-right">
      <a href="{{ site.baseurl }}/">Blog</a>
      <a href="{{ site.baseurl }}/galeri">Galeri</a>
      <a href="{{ site.baseurl }}/tentang">Tentang</a>
      <a href="{{ site.baseurl }}/lokasi">Lokasi</a>
    </div>
  </div>
</div>

<div class="header-offset"></div>

<script>
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 20);
});
</script>

<!-- ================= BLOG CONTENT ================= -->
<style>
.blog-wrap {
  max-width: 880px;
  margin: 60px auto;
  padding: 0 20px;
  line-height: 1.85;
}

.blog-title {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 6px;
}

.blog-meta {
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 35px;
}

.blog-wrap h2 {
  margin-top: 45px;
  font-size: 26px;
}

.blog-wrap ul,
.blog-wrap ol {
  margin-left: 22px;
}

.blog-wrap p {
  margin: 16px 0;
}

blockquote {
  margin: 40px 0;
  padding: 22px;
  background: #2a2f36;
  border-left: 4px solid #6f78ff;
  border-radius: 10px;
  font-style: italic;
}
</style>

<div class="blog-wrap">
  <h1 class="blog-title">Providers Scraping System</h1>
  <div class="blog-meta">
    Scraping • 5 min read • 2025
  </div>

  <p>
    Providers Scraping System merupakan sistem automasi pengambilan data universitas
    di Australia yang dikembangkan selama program magang di
    <strong>Interlace Studies Bali</strong>.
    Sistem ini dirancang untuk mengumpulkan data institusi pendidikan
    secara terstruktur dan konsisten.
  </p>

  <h2>Latar Belakang</h2>
  <p>
    Proses pengumpulan data universitas secara manual membutuhkan waktu yang lama
    dan berisiko terhadap kesalahan pencatatan. Informasi seperti nama institusi,
    lokasi, CRICOS code, serta daftar program studi sering tersebar
    di berbagai halaman website.
  </p>

  <h2>Tujuan Pengembangan</h2>
  <ul>
    <li>Mengotomatisasi pengambilan data universitas Australia</li>
    <li>Menyediakan dataset terstruktur untuk analisis internal</li>
    <li>Mengurangi human error dalam pengolahan data</li>
    <li>Mendukung pengambilan keputusan berbasis data</li>
  </ul>

  <h2>Arsitektur Sistem</h2>
  <ol>
    <li>Data Fetching – pengambilan halaman website</li>
    <li>HTML Parsing – ekstraksi elemen data penting</li>
    <li>Data Cleaning – normalisasi dan validasi data</li>
    <li>Database Storage – penyimpanan ke MySQL</li>
  </ol>

  <h2>Teknologi yang Digunakan</h2>
  <ul>
    <li>Python (Requests, BeautifulSoup)</li>
    <li>MySQL Database</li>
    <li>Jupyter Notebook</li>
    <li>Git & GitHub</li>
  </ul>

  <blockquote>
    Sistem ini menjadi fondasi awal dalam pengembangan pipeline
    data pendidikan internasional di Interlace Studies Bali.
  </blockquote>
</div>

<!-- ================= FOOTER ================= -->
<div class="footer-bg">
  <svg class="footer-wave" viewBox="0 0 1440 500" preserveAspectRatio="none">
    <defs>
      <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1976ff"/>
        <stop offset="50%" stop-color="#6a5bff"/>
        <stop offset="100%" stop-color="#a431ff"/>
      </linearGradient>
    </defs>
    <path d="M0,150 C300,250 600,50 900,150 C1200,250 1500,70 1800,150 L1800,500 L0,500 Z"></path>
  </svg>

  <footer class="footer">
    <h2 class="footer-brand">Aju's Blog</h2>
    <p class="footer-sub">Built with ❤️ using Jekyll • 2025</p>
    <p class="footer-copy">© 2025 Aju’s Blog — All Rights Reserved.</p>
  </footer>
</div>
