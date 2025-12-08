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
      <a href="{{ site.baseurl }}/tentang">Tentang</a>
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
.posts-grid { display: grid; }
.posts-list { display: none; }

.posts-grid.grid-mode { display: grid; }
.posts-list.list-mode { display: block; }


.posts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}
/* GRID MODE */
.posts-grid.grid-view .post-card {
  display: block;
}
/* LIST MODE WRAPPER */
.posts-list {
  width: 100%;
  display: flex;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* LIST CARD ITEM */
.list-item {
  display: flex;
  background: #2f3338;
  border-radius: 16px;
  padding: 18px;
  gap: 20px;
  margin-bottom: 24px;
  border-radius: 16px;
}

/* LIST THUMBNAIL */
.list-thumb {
  width: 220px;
  height: 140px;
  border-radius: 12px;
  object-fit: cover;
}

/* LIST CONTENT */
.list-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}
/* LIST TEXT */
.list-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.list-date {
  font-size: 13px;
  opacity: 0.7;
}

.list-desc {
  font-size: 15px;
  color: #ddd;
  line-height: 1.4;
  max-height: 3.3em; /* 2 baris */
  overflow: hidden;
}

.read-more-btn {
  color: #4ea3ff;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
}

.read-more-btn:hover {
  text-decoration: underline;
}

/* COMMENT */
.comment-toggle {
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  opacity: 0.8;
}

.comment-box {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all .3s ease;
}

.comment-box.show {
  opacity: 1;
  max-height: 300px; /* cukup untuk form */
}

.comment-box input,
.comment-box textarea {
  width: 100%;
  padding: 8px;
  background: #1e1f22;
  border: 1px solid #444;
  border-radius: 6px;
  color: white;
}

.send-comment-btn {
  padding: 8px;
  background: #2563eb;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
.close-comment {
  background: #444;
  border: none;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 10px;
  float: right;
}

.comment-alert {
  margin-top: 10px;
  padding: 8px;
  border-radius: 6px;
  font-size: 14px;
  display: none;
}

.comment-alert.success {
  background: #2563eb;
  color: white;
}

.comment-alert.error {
  background: #b91c1c;
  color: white;
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

<style>
.footer-bg {
  position: relative;
  width: 100%;
  padding-top: 180px;
  overflow: hidden;
}

/* WAVE BACKGROUND — NO MORE TRANSFORM ANIMATION */
.wave-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 420px;
  background: url('data:image/svg+xml;utf8,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500" preserveAspectRatio="none"> \
    <defs> \
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%"> \
        <stop offset="0%" stop-color="%231976ff"/> \
        <stop offset="50%" stop-color="%236a5bff"/> \
        <stop offset="100%" stop-color="%23a431ff"/> \
      </linearGradient> \
    </defs> \
    <path fill="url(%23g)" d="M0,150 C300,250 600,50 900,150 C1200,250 1500,70 1800,150 L1800,500 L0,500 Z"/> \
  </svg>') repeat-x;

  background-size: 200% 100%;
  animation: waveScroll 12s linear infinite;
  z-index: 1;
}

@keyframes waveScroll {
  from { background-position: 0 0; }
  to   { background-position: -2000px 0; }
}

/* FOOTER CONTENT */
footer.footer {
  position: relative;
  z-index: 5;
  padding: 120px 20px 80px;
  text-align: center;
  color: white;
}
</style>


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
      <span class="icon-list"><span></span></span>
    </button>
  </div>
  
  <!-- ============= GRID MODE (SEJAJAR DENGAN LIST!) ============= -->
  <div class="posts-grid grid-mode">
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
      <div class="post-card grid-item">
        <img src="/gungajus/assets/img/itjobs-viz-thumb.jpg" class="post-thumb">
        <div class="post-overlay">
          <div class="overlay-content">
            <div class="overlay-title">IT Job Visualization</div>
            <div class="overlay-desc">Visualisasi tren role pekerjaan IT berdasarkan dataset job scraping.</div>
            <div class="post-meta">Visualitation • 5 min read • 2025</div>
            <a href="/gungajus/projects/itjobs-viz" class="overlay-btn">Baca selengkapnya →</a>
          </div>
        </div>
      </div>
      <div class="post-card grid-item">
        <img src="/gungajus/assets/img/anzsco-viz-thumb.jpg" class="post-thumb">
        <div class="post-overlay">
          <div class="overlay-content">
            <div class="overlay-title">ANZSCO Data Visualitation</div>
            <div class="overlay-desc">Visualisasi data ANZSCO menggunakan Looker Studio.</div>
            <div class="post-meta">Scraping • 5 min read • 2025</div>
            <a href="/gungajus/projects/anzsco-viz" class="overlay-btn">Baca selengkapnya →</a>
          </div>
        </div>
      </div>
      <div class="post-card grid-item">
        <img src="/gungajus/assets/img/ass-scraping.jpg" class="post-thumb">
        <div class="post-overlay">
          <div class="overlay-content">
            <div class="overlay-title">Skill Assessment Scraping</div>
            <div class="overlay-desc">Scraping Website Skill Assessment di Australia.</div>
            <div class="post-meta">Scraping • 5 min read • 2025</div>
            <a href="/gungajus/projects/assessment-scraping" class="overlay-btn">Baca selengkapnya →</a>
          </div>
        </div>
      </div>
  </div> <!-- END GRID -->

  <!-- ============= LIST MODE (SEJAJAR, BUKAN DI DALAM GRID!) ============= -->
  <div class="posts-list list-mode" style="display:none;">
      <div class="post-card list-item">
        <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="list-thumb">
        <div class="list-content">
          <h2 class="list-title">Providers Scraping System</h2>
          <div class="list-date">– November 23, 2023</div>
          <div class="list-desc">
            Scraping data universitas Australia lengkap menggunakan teknologi automasi...
          </div>
          <a class="read-more-btn" href="{{ site.baseurl }}/projects/providers-scraping">
            BACA SELENGKAPNYA
          </a>
          <div class="comment-toggle">💬 Posting Komentar</div>
          <div class="comment-box">
            <button class="close-comment">✖</button>
            <input type="text" class="comment-name" placeholder="Nama Anda">
            <textarea class="comment-text" placeholder="Komentar Anda"></textarea>
            <button class="send-comment-btn">Kirim</button>
            <div class="comment-alert"></div>
          </div>
        </div>
      </div>
      <div class="post-card list-item">
        <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="list-thumb">
        <div class="list-content">
          <h2 class="list-title">Providers Scraping System</h2>
          <div class="list-date">– November 23, 2023</div>
          <div class="list-desc">
            Scraping data universitas Australia lengkap menggunakan teknologi automasi...
          </div>
          <a class="read-more-btn" href="{{ site.baseurl }}/projects/providers-scraping">
            BACA SELENGKAPNYA
          </a>
          <div class="comment-toggle">💬 Posting Komentar</div>
          <div class="comment-box">
            <button class="close-comment">✖</button>
            <input type="text" class="comment-name" placeholder="Nama Anda">
            <textarea class="comment-text" placeholder="Komentar Anda"></textarea>
            <button class="send-comment-btn">Kirim</button>
            <div class="comment-alert"></div>
          </div>
        </div>
      </div>
      <div class="post-card list-item">
        <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="list-thumb">
        <div class="list-content">
          <h2 class="list-title">Providers Scraping System</h2>
          <div class="list-date">– November 23, 2023</div>
          <div class="list-desc">
            Scraping data universitas Australia lengkap menggunakan teknologi automasi...
          </div>
          <a class="read-more-btn" href="{{ site.baseurl }}/projects/providers-scraping">
            BACA SELENGKAPNYA
          </a>
          <div class="comment-toggle">💬 Posting Komentar</div>
          <div class="comment-box">
            <button class="close-comment">✖</button>
            <input type="text" class="comment-name" placeholder="Nama Anda">
            <textarea class="comment-text" placeholder="Komentar Anda"></textarea>
            <button class="send-comment-btn">Kirim</button>
            <div class="comment-alert"></div>
          </div>
        </div>
      </div>
      <div class="post-card list-item">
        <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="list-thumb">
        <div class="list-content">
          <h2 class="list-title">Providers Scraping System</h2>
          <div class="list-date">– November 23, 2023</div>
          <div class="list-desc">
            Scraping data universitas Australia lengkap menggunakan teknologi automasi...
          </div>
          <a class="read-more-btn" href="{{ site.baseurl }}/projects/providers-scraping">
            BACA SELENGKAPNYA
          </a>
          <div class="comment-toggle">💬 Posting Komentar</div>
          <div class="comment-box">
            <button class="close-comment">✖</button>
            <input type="text" class="comment-name" placeholder="Nama Anda">
            <textarea class="comment-text" placeholder="Komentar Anda"></textarea>
            <button class="send-comment-btn">Kirim</button>
            <div class="comment-alert"></div>
          </div>
        </div>
      </div>
      <div class="post-card list-item">
        <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="list-thumb">
        <div class="list-content">
          <h2 class="list-title">Providers Scraping System</h2>
          <div class="list-date">– November 23, 2023</div>
          <div class="list-desc">
            Scraping data universitas Australia lengkap menggunakan teknologi automasi...
          </div>
          <a class="read-more-btn" href="{{ site.baseurl }}/projects/providers-scraping">
            BACA SELENGKAPNYA
          </a>
          <div class="comment-toggle">💬 Posting Komentar</div>
          <div class="comment-box">
            <button class="close-comment">✖</button>
            <input type="text" class="comment-name" placeholder="Nama Anda">
            <textarea class="comment-text" placeholder="Komentar Anda"></textarea>
            <button class="send-comment-btn">Kirim</button>
            <div class="comment-alert"></div>
          </div>
        </div>
      </div>
      <div class="post-card list-item">
        <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="list-thumb">
        <div class="list-content">
          <h2 class="list-title">Providers Scraping System</h2>
          <div class="list-date">– November 23, 2023</div>
          <div class="list-desc">
            Scraping data universitas Australia lengkap menggunakan teknologi automasi...
          </div>
          <a class="read-more-btn" href="{{ site.baseurl }}/projects/providers-scraping">
            BACA SELENGKAPNYA
          </a>
          <div class="comment-toggle">💬 Posting Komentar</div>
          <div class="comment-box">
            <button class="close-comment">✖</button>
            <input type="text" class="comment-name" placeholder="Nama Anda">
            <textarea class="comment-text" placeholder="Komentar Anda"></textarea>
            <button class="send-comment-btn">Kirim</button>
            <div class="comment-alert"></div>
          </div>
        </div>
      </div>
  </div> <!-- END LIST -->

</div>

<script>
// TOGGLE OPEN/CLOSE
document.querySelectorAll('.comment-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const box = toggle.nextElementSibling;
        box.classList.toggle("show");
    });
});

// tombol close
document.querySelectorAll('.close-comment').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.remove("show");
    });
});

// VALIDATION + ALERT MESSAGE
document.querySelectorAll('.send-comment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const box = btn.parentElement;
        const name = box.querySelector('.comment-name');
        const text = box.querySelector('.comment-text');
        const alertBox = box.querySelector('.comment-alert');

        if (name.value.trim() === "" || text.value.trim() === "") {
            alertBox.textContent = "⚠️ Semua kolom harus diisi.";
            alertBox.className = "comment-alert error";
            alertBox.style.display = "block";
            return;
        }

        // jika sukses
        alertBox.textContent = "✔️ Komentar berhasil dikirim!";
        alertBox.className = "comment-alert success";
        alertBox.style.display = "block";

        // reset input
        name.value = "";
        text.value = "";

        // hide alert after 3 sec
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    });
});

</script>

<script>
const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");

const gridMode = document.querySelector(".posts-grid");
const listMode = document.querySelector(".posts-list");

gridBtn.addEventListener("click", () => {
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
    gridMode.style.display = "grid";
    listMode.style.display = "none";
});

listBtn.addEventListener("click", () => {
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    gridMode.style.display = "none";
    listMode.style.display = "block";
});
</script>

<div class="footer-bg">
  <div class="wave-layer"></div>

  <footer class="footer">
    <h2 class="footer-brand">Aju's Blog</h2>
    <p class="footer-sub">Built with ❤️ using Jekyll • 2025</p>
    <div class="footer-links">
      <a href="/">Blog</a>
      <a href="/galeri">Galeri</a>
      <a href="/tentang">Tentang</a>
      <a href="/lokasi">Lokasi</a>
    </div>
    <p class="footer-copy">© 2025 Aju’s Blog — All Rights Reserved.</p>
  </footer>
</div>


