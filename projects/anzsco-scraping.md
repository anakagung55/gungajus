---
layout: default
title: "ANZSCO Scraping"
permalink: /projects/anzsco-scraping
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
<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: 14px 0;
  transition: background .35s ease, box-shadow .35s ease;
  backdrop-filter: blur(10px);
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
  color: #fff !important;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 8px;
  transition: .25s ease;
}
.navbar-right a:hover {
  background: linear-gradient(135deg,#1976ff,#a431ff);
}
.header-offset { margin-top: 90px; }
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
}
.blog-wrap h1 {
  font-size: 38px;
  color: #fff;
}
.blog-meta {
  font-size: 14px;
  opacity: .7;
  margin-bottom: 30px;
}
.blog-wrap h2 {
  margin-top: 45px;
  font-size: 26px;
  color: #fff;
}
.blog-wrap p,
.blog-wrap li {
  color: #e0e0e0;
}
blockquote {
  margin: 40px 0;
  padding: 20px 26px;
  background: linear-gradient(135deg,#1f2a44,#2a2f36);
  border-left: 4px solid #6f78ff;
  border-radius: 12px;
  color: #dbe2ff;
}
</style>

<div class="blog-wrap">
  <h1>ANZSCO Scraping</h1>
  <div class="blog-meta">Scraping • 5 min read • 2025</div>

  <img src="{{ site.baseurl }}/assets/img/anzsco-thumb.jpg"
       style="max-width: 600px;border-radius:14px;margin:30px auto;display: block;">

  <p>
    ANZSCO Scraping merupakan sistem automasi pengambilan data
    <strong>Australian and New Zealand Standard Classification of Occupations (ANZSCO)</strong>
    yang digunakan sebagai dasar pemetaan pekerjaan, skill level, dan jalur migrasi
    di Australia dan New Zealand.
  </p>

  <h2>Latar Belakang</h2>
  <p>
    Informasi ANZSCO tersebar di berbagai halaman resmi pemerintah
    dan tidak disediakan dalam format dataset siap pakai.
    Hal ini menyulitkan proses analisis pekerjaan, evaluasi skill,
    serta pemetaan visa pathway secara sistematis.
  </p>

  <h2>Tujuan Pengembangan</h2>
  <ul>
    <li>Mengumpulkan daftar occupation ANZSCO secara terstruktur</li>
    <li>Mengambil data skill level dan deskripsi pekerjaan</li>
    <li>Mendukung analisis keterkaitan occupation dengan visa pathway</li>
    <li>Menyediakan dataset untuk analisis dan visualisasi lanjutan</li>
  </ul>

  <h2>Workflow Sistem</h2>
  <img src="{{ site.baseurl }}/assets/img/anzsco-flow.jpg"
       style="max-width: 600px;border-radius:14px;margin:30px auto;display: block;">

  <p>
    Sistem bekerja dengan melakukan scraping halaman occupation,
    parsing konten HTML, ekstraksi atribut pekerjaan,
    pembersihan data, dan penyimpanan ke dalam database terstruktur.
  </p>

  <h2>Teknologi yang Digunakan</h2>
  <ul>
    <li>Python (Requests, BeautifulSoup)</li>
    <li>Structured Data Processing</li>
    <li>MySQL Database</li>
    <li>Jupyter Notebook</li>
    <li>Git & GitHub</li>
  </ul>

  <blockquote>
    Dataset ANZSCO menjadi fondasi utama dalam analisis job market
    dan pengembangan sistem pemetaan migrasi berbasis data.
  </blockquote>
</div>

<!-- ================= RELATED PROJECTS (HOMEPAGE LOGIC) ================= -->
<style>
.related-projects {
  max-width: 1200px;
  margin: 120px auto 100px;
  padding: 0 20px;
}

.related-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 35px;
  color: #fff;
}

/* GRID */
.related-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

/* CARD BASE */
.related-card {
  position: relative;
  height: 220px;
  border-radius: 18px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  text-decoration: none;
  cursor: pointer;

  box-shadow: 0 14px 35px rgba(0,0,0,.55);
  transition: 
    transform .45s ease,
    box-shadow .45s ease;
}

/* HOVER LIFT */
.related-card:hover {
  transform: translateY(-10px);
  box-shadow:
    0 0 20px rgba(111,120,255,.45),
    0 0 40px rgba(164,49,255,.35);
}

/* OVERLAY — HIDDEN BY DEFAULT */
.related-overlay {
  position: absolute;
  inset: 0;
  z-index: 2;

  background: linear-gradient(
    135deg,
    rgba(25,118,255,.55),
    rgba(164,49,255,.35),
    rgba(0,0,0,.85)
  );

  opacity: 0;
  transition: opacity .45s ease;
}

/* SHOW OVERLAY ON HOVER */
.related-card:hover .related-overlay {
  opacity: 1;
}

/* CONTENT — HIDDEN INITIALLY */
.related-content {
  position: absolute;
  inset: 0;
  z-index: 3;
  padding: 28px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  opacity: 0;
  transform: translateY(24px);
  transition: 
    opacity .45s ease,
    transform .45s ease;
}

/* SHOW CONTENT ON HOVER */
.related-card:hover .related-content {
  opacity: 1;
  transform: translateY(0);
}

/* TEXT */
.related-content h3 {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
  color: #fff;
}

.related-content p {
  font-size: 14px;
  opacity: .85;
  margin-bottom: 16px;
  color: #e5e5ff;
}

/* BUTTON */
.related-btn {
  align-self: flex-start;
  padding: 10px 18px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg,#1976ff,#a431ff);
  border-radius: 10px;
  text-decoration: none;
  opacity: 0;
  transform: translateY(10px);
  transition: 
    opacity .4s ease,
    transform .4s ease;
}

/* BUTTON APPEAR */
.related-card:hover .related-btn {
  opacity: 1;
  transform: translateY(0);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .related-row {
    grid-template-columns: 1fr;
  }
}
</style>

<section class="related-projects">
  <div class="related-title">Related Projects</div>

  <div class="related-row">
    <!-- CARD 1 -->
    <a href="{{ site.baseurl }}/projects/providers-scraping"
       class="related-card"
       style="background-image:url('{{ site.baseurl }}/assets/img/providers-thumb.jpg')">
      <div class="related-overlay"></div>
      <div class="related-content">
        <h3>Provider Scraping</h3>
        <p>Australia University Dataset</p>
        <span class="related-btn">Baca selengkapnya →</span>
      </div>
    </a>
    <!-- CARD 2 -->
    <a href="{{ site.baseurl }}/projects/assessment-scraping"
       class="related-card"
       style="background-image:url('{{ site.baseurl }}/assets/img/ass-scraping.jpg')">
      <div class="related-overlay"></div>
      <div class="related-content">
        <h3>Skill Assessment</h3>
        <p>Assessment Authority Scraping</p>
        <span class="related-btn">Baca selengkapnya →</span>
      </div>
    </a>
    <!-- CARD 3 -->
    <a href="{{ site.baseurl }}/projects/itjobs-viz"
       class="related-card"
       style="background-image:url('{{ site.baseurl }}/assets/img/itjobs-viz-thumb.jpg')">
      <div class="related-overlay"></div>
      <div class="related-content">
        <h3>Data Analysis</h3>
        <p>IT Job Market Visualization</p>
        <span class="related-btn">Baca selengkapnya →</span>
      </div>
    </a>
  </div>
</section>
