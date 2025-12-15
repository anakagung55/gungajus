---
layout: default
title: "IT Job Visualization Project"
permalink: /projects/itjobs-viz
category: Data Analysis
tools: Python, Pandas, Looker Studio
year: 2025
---

<!-- ================= AI PARTICLE BACKGROUND ================= -->
<style>
html, body {
  overflow-x: hidden !important;
  width: 100%;
  background: transparent !important;
}

.page-content,
.main-content,
.wrapper,
.container {
  background: transparent !important;
}

#ai-bg {
  position: fixed;
  inset: 0;
  z-index: -5;
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
    ctx.fillStyle = "rgba(180,180,255,0.85)";
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

<!-- ================= NAVBAR (SAMA PROJECT LAIN) ================= -->
<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: 14px 0;
  backdrop-filter: blur(10px);
  transition: background .35s ease, box-shadow .35s ease;
}
.navbar:not(.scrolled) {
  background: rgba(0,0,0,.25);
}
.navbar.scrolled {
  background: linear-gradient(135deg,#1976ff55,#a431ff55);
  box-shadow: 0 0 12px rgba(77,97,255,.6),
              0 0 25px rgba(164,49,255,.4);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-left {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
.navbar-right {
  display: flex;
  gap: 24px;
}
.navbar-right a {
  color: #fff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 8px;
}
.navbar-right a:hover {
  background: linear-gradient(135deg,#1976ff,#a431ff);
}
.header-offset {
  margin-top: 90px;
}
</style>

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
  max-width: 900px;
  margin: 60px auto;
  padding: 40px;
  background: rgba(30,34,40,.88);
  border-radius: 18px;
  color: #e5e5e5;
  line-height: 1.85;
  box-shadow: 0 20px 40px rgba(0,0,0,.45);
  backdrop-filter: blur(6px);
  position: relative;
  z-index: 2;
}
.blog-wrap h1 { font-size: 38px; color: #fff; }
.blog-meta { font-size: 14px; opacity: .7; margin-bottom: 30px; }
.blog-wrap h2 { margin-top: 45px; font-size: 26px; color: #fff; }
.blog-wrap p, .blog-wrap li { color: #e0e0e0; }
blockquote {
  margin: 40px 0;
  padding: 20px 26px;
  background: linear-gradient(135deg,#1f2a44,#2a2f36);
  border-left: 4px solid #6f78ff;
  border-radius: 12px;
}
</style>

<div class="blog-wrap">
  <h1>IT Job Visualization Project</h1>
  <div class="blog-meta">Data Analysis • 5 min read • 2025</div>

  <img src="{{ site.baseurl }}/assets/img/itjobs-viz-thumb.jpg"
       style="width:100%;border-radius:14px;margin:30px 0;">

  <p>
    <strong>IT Job Visualization Project</strong> merupakan proyek analisis dan
    visualisasi data yang bertujuan untuk menggambarkan
    <strong>tren kebutuhan pekerjaan IT</strong> di Australia berdasarkan
    dataset hasil web scraping dari berbagai job portal.
  </p>

  <h2>Latar Belakang</h2>
  <p>
    Informasi kebutuhan tenaga kerja IT tersebar di berbagai platform
    lowongan kerja dengan format data yang berbeda-beda.
    Tanpa visualisasi yang terstruktur, sulit memahami
    role IT yang paling dibutuhkan serta tren skill dominan.
  </p>

  <h2>Tujuan Pengembangan</h2>
  <ul>
    <li>Menyajikan insight kebutuhan pekerjaan IT secara visual</li>
    <li>Mengidentifikasi role IT yang paling banyak dicari</li>
    <li>Menganalisis tren skill dan teknologi</li>
    <li>Mendukung pengambilan keputusan berbasis data</li>
  </ul>

  <h2>Workflow Sistem</h2>
  <img src="{{ site.baseurl }}/assets/img/itjobs-viz-flow.jpg"
       style="width:100%;border-radius:14px;margin:20px 0;">

  <h2>Teknologi yang Digunakan</h2>
  <ul>
    <li>Python (Pandas, NumPy)</li>
    <li>Data Cleaning & Transformation</li>
    <li>Looker Studio</li>
    <li>MySQL Database</li>
  </ul>

  <blockquote>
    Visualisasi data membantu mengubah data mentah hasil scraping
    menjadi insight yang mudah dipahami untuk analisis pasar kerja IT.
  </blockquote>
</div>
