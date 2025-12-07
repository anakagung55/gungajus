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
// -------
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Particle settings
const particles = [];
const COUNT = 90;  // jumlah partikel

for (let i = 0; i < COUNT; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6
  });
}

function animate() {
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

    // bounce edges
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animate);
}
animate();
</script>

<!-- ================= NAVBAR FIXED ================= -->
<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 32px;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999; /* Pasti berada di atas semua foto */
}

.navbar-left {
  font-size: 20px;
  font-weight: 700;
  color: white;
}

.navbar-right a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-size: 15px;
  transition: 0.25s ease;
}

.navbar-right a:hover {
  opacity: 0.6;
  transform: translateY(-1px);
}

/* memberi jarak agar header foto tidak tertutup navbar */
.header-offset {
  margin-top: 70px;
}
</style>

<div class="navbar">
  <div class="navbar-left">Aju's Blog</div>
  <div class="navbar-right">
    <a href="{{ site.baseurl }}/">Blog</a>
    <a href="{{ site.baseurl }}/galeri">Galeri</a>
    <a href="{{ site.baseurl }}/tentang">Tentang</a>
    <a href="{{ site.baseurl }}/lokasi">Lokasi</a>
  </div>
</div>

<div class="header-offset"></div>

<!-- ================= SLIDESHOW HEADER ================= -->
<style>
.slideshow-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 18px;
}

/* Semua slide disusun menumpuk */
.slide-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  animation: fadeSlide 35s infinite;
}

/* Delay untuk setiap foto */
.slide-img:nth-child(1) { animation-delay: 0s; }
.slide-img:nth-child(2) { animation-delay: 5s; }
.slide-img:nth-child(3) { animation-delay: 10s; }
.slide-img:nth-child(4) { animation-delay: 15s; }
.slide-img:nth-child(5) { animation-delay: 20s; }
.slide-img:nth-child(6) { animation-delay: 25s; }
.slide-img:nth-child(7) { animation-delay: 30s; }

/* Efek fade */
@keyframes fadeSlide {
  0% { opacity: 0; }
  10% { opacity: 1; }
  25% { opacity: 1; }
  35% { opacity: 0; }
  100% { opacity: 0; }
}

/* Title di tengah */
.header-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 34px;
  font-weight: 700;
  text-shadow: 0px 0px 12px rgba(0,0,0,0.7);
  text-align: center;
  z-index: 10;
}
</style>

<div class="slideshow-container">
  
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header1.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header2.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header3.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header4.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header5.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header6.jpg">
  <img class="slide-img" src="{{ site.baseurl }}/assets/img/header7.jpg">

  <div class="header-title">Magang Interlace Studies Bali</div>

</div>

<br>



<style>
/* RESET Cayman Header */
.page-header { display: none !important; }

/* GLOBAL */
body {
  margin: 0;
  padding: 0;
  background: #1e2228;
  font-family: 'Poppins', sans-serif;
  color: #e5e5e5;
}

/* NAVBAR */
.navbar {
  width: 100%;
  padding: 18px 60px;
  position: absolute;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.navbar a {
  text-decoration: none;
  margin-left: 28px;
  color: white;
  font-weight: 500;
  transition: 0.2s;
}

.navbar a:hover {
  opacity: 0.8;
}
  
/* Toggle Buttons */
/* --- WRAPPER --- */
.view-toggle {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

/* --- NORMAL BUTTON --- */
.toggle-btn {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid #2f3340;
  background: #1f232b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .25s ease;
  box-shadow: 0 0 0 transparent;
}

/* --- ACTIVE BUTTON (NEON GRADIENT) --- */
.toggle-btn.active {
  background: linear-gradient(135deg, #1976ff, #a431ff);
  border: none;
  box-shadow: 
    0 0 10px rgba(77, 97, 255, .7),
    0 0 20px rgba(164, 49, 255, .5);
  transform: translateY(-1px);
}

/* --- ICON STYLE --- */
.toggle-btn i {
  font-size: 18px;
  color: white;
}

/* --- HOVER EFFECT --- */
.toggle-btn:hover {
  opacity: .85;
}
.icon-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  width: 22px;
  height: 22px;
}

.icon-grid span {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 4px;
}
.icon-list {
  position: relative;
  width: 22px;
  height: 22px;
}

.icon-list::before,
.icon-list::after,
.icon-list span::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background: white;
  border-radius: 4px;
}

.icon-list::before {
  top: 3px;
}
.icon-list span::before {
  top: 9px;
}
.icon-list::after {
  top: 15px;
}

/* HERO */
.hero {
  width: 100%;
  height: 420px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

/* TITLE IN HERO */
.hero-title {
  font-size: 42px;
  font-weight: 700;
  text-shadow: 0 4px 12px rgba(0,0,0,0.6);
}

/* SECTION WRAPPER */
.container {
  max-width: 1300px;
  margin: 50px auto;
  padding: 0 20px;
}

/* SECTION TITLE */
.section-title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 25px;
}

/* GRID POST */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}
/* GRID MODE */
.posts-grid.grid-view .post-card {
  display: block;
}

/* ================================
   LIST MODE STRUCTURE
================================ */

/* Hide list cards by default */
.list-item { 
  display: none; 
}

/* Show list items when list-view active */
.posts-grid.list-view .list-item {
  display: flex;
}

/* Hide grid cards in list mode */
.posts-grid.list-view .grid-item {
  display: none;
}


/* ================================
   LIST CARD BASE
================================ */
.posts-grid.list-view .post-card {
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background: #2d3137;
  border-radius: 12px;
  align-items: flex-start;
  box-shadow: 0 5px 12px rgba(0,0,0,0.2);
  transition: .25s ease;
}

.posts-grid.list-view .post-card:hover {
  transform: translateY(-3px);
}


/* ================================
   LIST THUMBNAIL
================================ */
.posts-grid.list-view .list-thumb {
  width: 210px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}


/* ================================
   LIST CONTENT AREA
================================ */
.posts-grid.list-view .list-content {
  flex: 1;
  color: #e6e6e6;
}

.posts-grid.list-view .list-title {
  font-size: 22px;
  margin: 0;
  font-weight: 700;
  line-height: 1.3;
}

.posts-grid.list-view .list-date {
  margin: 6px 0 12px 0;
  opacity: 0.65;
  font-size: 14px;
}


/* ================================
   DESCRIPTION WITH FADE SHADOW
================================ */
.posts-grid.list-view .list-desc {
  max-height: 60px;
  overflow: hidden;
  position: relative;
  font-size: 15px;
  line-height: 1.45;
  opacity: 0.95;
}

.posts-grid.list-view .list-desc::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 35px;
  width: 100%;
  background: linear-gradient(180deg, transparent, #2d3137);
}


/* ================================
   READ MORE BUTTON
================================ */
.read-more-btn {
  display: inline-block;
  margin-top: 14px;
  background: #1976ff;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: .25s ease;
}

.read-more-btn:hover {
  opacity: 0.85;
}


/* ================================
   COMMENT TOGGLE
================================ */
.comment-toggle {
  margin-top: 14px;
  font-size: 15px;
  cursor: pointer;
  color: #58a6ff;
  display: flex;
  align-items: center;
  gap: 5px;
  user-select: none;
}


/* ================================
   COMMENT BOX
================================ */
.comment-box {
  margin-top: 12px;
  display: none;
  flex-direction: column;
  gap: 10px;
}

.comment-box input,
.comment-box textarea {
  width: 100%;
  padding: 10px;
  background: #1f2328;
  border: 1px solid #3b3f46;
  border-radius: 6px;
  color: white;
}

.send-comment-btn {
  align-self: flex-start;
  background: #1976ff;
  padding: 8px 16px;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: .25s ease;
}

.send-comment-btn:hover {
  opacity: 0.85;
}


/* ================================
   RESPONSIVE TUNING
================================ */
@media (max-width: 700px) {
  .posts-grid.list-view .post-card {
    flex-direction: column;
  }

  .posts-grid.list-view .list-thumb {
    width: 100%;
    height: 180px;
  }
}

/* ============================
   CARD BASE
============================ */
.post-card {
  background: #2a2f36;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.28);
  transition: .3s ease;
  position: relative;
}

.post-card:hover {
  transform: translateY(-6px);
}


/* ============================
   THUMB WRAPPER + IMAGE
============================ */
.thumb-wrapper {
  position: relative;
  overflow: hidden;
}

.post-thumb {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform .45s ease;
}

.post-card:hover .post-thumb {
  transform: scale(1.08);
}


/* ============================
   OVERLAY
============================ */
.post-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  background: linear-gradient(
      to top,
      rgba(0,0,0,0.75),
      rgba(0,0,0,0.0)
  );

  opacity: 0;
  transition: opacity .35s ease;
  display: flex;
  align-items: flex-end;
  padding: 22px;
}

.post-card:hover .post-overlay {
  opacity: 1;
}
.post-meta {
  font-size: 13px;
  opacity: 0.7;
  margin-bottom: 10px;
}

/* ============================
   OVERLAY TEXT CONTENT
============================ */
.overlay-content {
  transform: translateY(22px);
  transition: transform .35s ease;
  color: white;
}

.post-card:hover .overlay-content {
  transform: translateY(0);
}

.overlay-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.overlay-desc {
  font-size: 13px;
  opacity: 0.85;
  margin-bottom: 10px;
  line-height: 1.4;
}

.overlay-btn {
  display: inline-block;
  background: #1d4ed8;
  padding: 9px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  opacity: 0;
  transform: translateY(10px);
  transition: .35s ease;
  pointer-events: all;
}

.post-card:hover .overlay-btn {
  opacity: 1;
  transform: translateY(0);
}
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  width: 100%;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* SIDEBAR */
.sidebar {
  width: 320px;
  padding-left: 20px;
}

.sidebar-box {
  background: #2a2f36;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.sidebar-title {
  font-size: 18px;
  margin-bottom: 12px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  background: #1e2228;
  border: 1px solid #3a3f47;
  border-radius: 6px;
  color: white;
  margin-bottom: 12px;
}

.sidebar-button {
  padding: 10px;
  background: #111;
  color: white;
  border: none;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
}

.sidebar-button:hover {
  background: #222;
}

/* LAYOUT WRAPPER */
.content-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>

<!-- NAVBAR -->

<!-- HERO IMAGE -->
<div class="container">

  <div class="section-title">Postingan Terbaru</div>

  <!-- TOGGLE BUTTON -->
  <div class="view-toggle">
    <button id="gridView" class="toggle-btn active">
      <span class="icon-grid">
        <span></span><span></span>
        <span></span><span></span>
      </span>
    </button>
    <button id="listView" class="toggle-btn">
      <span class="icon-list">
        <span></span>
      </span>
    </button>
  </div>
  
  <!-- CONTENT WRAPPER -->
  <div class="posts-grid grid-view">
    <!-- =============== GRID CARD VERSION =============== -->
    <div class="post-card grid-item">
      <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="post-thumb">
      <div class="post-overlay">
        <div class="overlay-content">
          <div class="overlay-title">Providers Scraping System</div>
          <div class="overlay-desc">Scraping data universitas Australia lengkap ...</div>
          <div class="post-meta">Scraping • 5 min read • 2025</div>
          <a href="{{ site.baseurl }}/projects/providers-scraping" class="overlay-btn">Baca selengkapnya →</a>
        </div>
      </div>
    </div>
    <div class="post-card grid-item">
      <img src="{{ site.baseurl }}/assets/img/jobportal-thumb.jpg" class="post-thumb">
      <div class="post-overlay">
        <div class="overlay-content">
          <div class="overlay-title">IT Job Portal Scraping</div>
          <div class="overlay-desc">Mengambil data lowongan pekerjaan IT dan memetakannya sebagai dataset analisis.</div>
          <div class="post-meta">Scraping • 5 min read • 2025</div>
          <a href="{{ site.baseurl }}/projects/scraping-job-portal" class="overlay-btn">Baca selengkapnya →</a>
        </div>
      </div>
    </div>
    <div class="post-card grid-item">
      <img src="{{ site.baseurl }}/assets/img/anzsco-thumb.jpg" class="post-thumb">
      <div class="post-overlay">
        <div class="overlay-content">
          <div class="overlay-title">ANZSCO Scraping</div>
          <div class="overlay-desc">Scraping informasi ANZSCO untuk pemetaan job family dan skill level.</div>
          <div class="post-meta">Scraping • 5 min read • 2025</div>
          <a href="{{ site.baseurl }}/projects/anzsco-scraping" class="overlay-btn">Baca selengkapnya →</a>
        </div>
      </div>
    </div>
    <!-- ================== LIST VERSION ================== -->
    <div class="post-card list-item">
      <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="list-thumb">
      <div class="list-content">
        <h2 class="list-title">Providers Scraping System</h2>
        <div class="list-date">– November 23, 2023</div>
        <div class="list-desc">
          Scraping data universitas Australia lengkap menggunakan teknologi automasi...
        </div>
        <a class="read-more-btn" href="{{ site.baseurl }}/projects/providers-scraping">BACA SELENGKAPNYA</a>
        <div class="comment-toggle">💬 Posting Komentar</div>
        <div class="comment-box">
          <input type="text" placeholder="Nama Anda">
          <textarea placeholder="Komentar Anda"></textarea>
          <button class="send-comment-btn">Kirim</button>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");
const container = document.querySelector(".posts-grid");

gridBtn.addEventListener("click", () => {
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
  container.classList.add("grid-view");
  container.classList.remove("list-view");
});

listBtn.addEventListener("click", () => {
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
  container.classList.add("list-view");
  container.classList.remove("grid-view");
});
</script>
<script>
document.querySelectorAll('.comment-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const box = btn.nextElementSibling;
        box.style.display = box.style.display === 'flex' ? 'none' : 'flex';
    });
});
</script>



