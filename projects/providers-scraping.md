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
#ai-bg canvas { width: 100%; height: 100%; display: block; }
</style>

<div id="ai-bg">
  <canvas id="particles"></canvas>
</div>

<script>
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
function resize(){ canvas.width=innerWidth; canvas.height=innerHeight; }
resize(); addEventListener("resize", resize);

const particles=[];
for(let i=0;i<90;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:(Math.random()-.5)*.6,
    dy:(Math.random()-.5)*.6
  });
}
(function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(180,180,255,.8)";
    ctx.shadowBlur=15;
    ctx.shadowColor="#6f78ff";
    ctx.fill();
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
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

<style>
.blog-article {
  max-width: 820px;
  margin: 0 auto;
  line-height: 1.8;
}

.blog-title {
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 6px;
}

.blog-meta {
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 25px;
}

.blog-hero {
  width: 100%;
  border-radius: 16px;
  margin-bottom: 30px;
}

.blog-lead {
  font-size: 18px;
  opacity: 0.9;
}

.blog-article h2 {
  margin-top: 40px;
  font-size: 24px;
}

.blog-article p {
  margin: 16px 0;
}

.blog-article ul,
.blog-article ol {
  margin-left: 20px;
}

.blog-img {
  width: 100%;
  border-radius: 14px;
  margin: 25px 0;
}

blockquote {
  margin: 40px 0;
  padding: 20px;
  background: #2a2f36;
  border-left: 4px solid #6f78ff;
  border-radius: 8px;
  font-style: italic;
}
</style>


<div class="container">
  <!-- JUDUL ARTIKEL -->
  <article class="blog-article">
    <h1 class="blog-title">Providers Scraping System</h1>
    <div class="blog-meta">
      <span>Scraping</span> • <span>5 min read</span> • <span>2025</span>
    </div>
    <!-- HERO IMAGE -->
    <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="blog-hero">
    <!-- INTRO -->
    <p class="blog-lead">
      Providers Scraping System merupakan sistem automasi pengambilan data universitas
      di Australia yang dikembangkan selama program magang di
      <strong>Interlace Studies Bali</strong>.
      Sistem ini bertujuan untuk mengumpulkan data institusi pendidikan secara terstruktur
      dan siap digunakan untuk analisis lanjutan.
    </p>
    <hr>
    <!-- SECTION -->
    <h2>Latar Belakang</h2>
    <p>
      Proses pengumpulan data universitas secara manual membutuhkan waktu yang lama
      dan rentan terhadap kesalahan. Informasi seperti nama institusi, lokasi,
      CRICOS code, serta daftar program studi sering tersebar di berbagai halaman website.
    </p>
    <p>
      Oleh karena itu, dikembangkan sebuah sistem scraping otomatis yang mampu
      mengekstraksi data tersebut secara konsisten dan terintegrasi ke dalam database.
    </p>
    <!-- SECTION -->
    <h2>Tujuan Pengembangan</h2>
    <ul>
      <li>Mengotomatisasi pengambilan data universitas Australia</li>
      <li>Menyediakan dataset terstruktur untuk analisis internal</li>
      <li>Mengurangi human error dalam pengolahan data</li>
      <li>Mendukung pengambilan keputusan berbasis data</li>
    </ul>
    <!-- IMAGE CONTENT -->
    <img src="{{ site.baseurl }}/assets/img/providers-flow.jpg" class="blog-img">
    <!-- SECTION -->
    <h2>Arsitektur Sistem</h2>
    <p>
      Sistem scraping ini dibangun menggunakan pendekatan pipeline yang terdiri dari
      beberapa tahap utama:
    </p>
    <ol>
      <li><strong>Data Fetching</strong> – Mengambil halaman website universitas</li>
      <li><strong>HTML Parsing</strong> – Menyaring elemen data yang relevan</li>
      <li><strong>Data Cleaning</strong> – Normalisasi dan validasi data</li>
      <li><strong>Database Storage</strong> – Penyimpanan ke MySQL</li>
    </ol>
    <!-- SECTION -->
    <h2>Teknologi yang Digunakan</h2>
    <ul>
      <li>Python (Requests, BeautifulSoup)</li>
      <li>MySQL Database</li>
      <li>Jupyter Notebook untuk eksplorasi data</li>
      <li>Git & GitHub untuk version control</li>
    </ul>
    <!-- SECTION -->
    <h2>Hasil dan Output</h2>
    <p>
      Output utama dari sistem ini adalah dataset universitas Australia yang telah
      terstruktur dengan baik dan siap digunakan untuk analisis lanjutan,
      visualisasi data, maupun integrasi ke sistem lain.
    </p>
    <!-- CLOSING -->
    <blockquote>
      Sistem ini menjadi fondasi penting dalam pengembangan pipeline data
      pendidikan internasional di Interlace Studies Bali.
    </blockquote>
  </article>

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
    <h2>Aju's Blog</h2>
    <p>Built with ❤️ using Jekyll • 2025</p>
  </footer>
</div>
