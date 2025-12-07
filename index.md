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

</div> -->

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
.view-toggle {
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
}

.toggle-btn {
  padding: 8px 16px;
  background: #2a2f36;
  border: 1px solid #3a3f47;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: .25s ease;
}

.toggle-btn.active {
  background: #1d4ed8;
  border-color: #1d4ed8;
}

.toggle-btn:hover {
  opacity: .8;
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

/* LIST MODE */
.posts-grid.list-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.posts-grid.list-view .post-card {
  height: 180px;        /* fix tinggi */
  display: flex;
  flex-direction: row;
  align-items: center;  /* rata tengah vertikal */
  width: 100%;          /* full kiri */
  max-width: none !important;   /* supaya tidak center */
  margin: 0 !important;
}
  
.posts-grid.list-view .post-card {
  max-width: 950px;
  margin: 0 auto;  /* supaya center */
}
  
.posts-grid.list-view .post-card {
  overflow: hidden;
}
  
.posts-grid.list-view .overlay-title {
  font-size: 20px;
  font-weight: 700;
}

.posts-grid.list-view .overlay-desc {
  font-size: 15px;
  opacity: 0.9;
  margin-top: 6px;
}
/* Content wrapper inside list view */
.posts-grid.list-view .post-overlay {
  height: 100%;
  display: flex;
  align-items: center;     /* vertikal rapi */
  padding-left: 20px;
  background: none !important;
}
.posts-grid.list-view .post-thumb {
  width: 300px;
  height: 180px;
  object-fit: cover;
  flex-shrink: 0;
}
.posts-grid.list-view .overlay-content {
  padding: 20px;
  transform: none !important;
}

/* Jangan ada animasi hover pada list */
.posts-grid.list-view .post-card:hover .post-thumb {
  transform: none;
}

.posts-grid.list-view .post-card:hover .post-overlay {
  opacity: 1;
}

.posts-grid.list-view .overlay-content {
  transform: translateY(0) !important;
}

.posts-grid.list-view .overlay-btn {
  opacity: 1 !important;
  transform: translateY(0) !important;
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

  <div class="view-toggle">
  <button id="gridView" class="toggle-btn active">🔲 Grid</button>
  <button id="listView" class="toggle-btn">📄 List</button>
  </div>
  
  <div class="content-wrapper">
    <!-- GRID POST -->
    <div class="posts-grid">
      <!-- CARD 1 -->
      <div class="post-card">
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
      <!-- CARD 2 -->
      <div class="post-card">
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
      <!-- CARD 3 -->
      <div class="post-card">
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
      <!-- CARD 4 -->
      <div class="post-card">
        <img src="{{ site.baseurl }}/assets/img/itjobs-viz-thumb.jpg" class="post-thumb">
           <div class="post-overlay">
            <div class="overlay-content">
              <div class="overlay-title">IT Job Visualizationem</div>
              <div class="overlay-desc">Visualisasi tren role pekerjaan IT berdasarkan dataset job scraping.</div>
              <div class="post-meta">Visualitation • 5 min read • 2025</div>
              <a href="{{ site.baseurl }}/projects/itjobs-viz" class="overlay-btn">Baca selengkapnya →</a>
            </div>
          </div>
        </div>
          <!-- CARD 5 -->
      <div class="post-card">
        <img src="{{ site.baseurl }}/assets/img/anzsco-viz-thumb.jpg" class="post-thumb">
           <div class="post-overlay">
            <div class="overlay-content">
              <div class="overlay-title">ANZSCO Data Visualitation</div>
              <div class="overlay-desc">Visualisasi data ANZSCO menggunakan Looker Studio.</div>
              <div class="post-meta">Visualitation • 5 min read • 2025</div>
              <a href="{{ site.baseurl }}/projects/anzsco-viz" class="overlay-btn">Baca selengkapnya →</a>
            </div>
          </div>
        </div>
          <!-- CARD 6 -->
      <div class="post-card">
        <img src="{{ site.baseurl }}/assets/img/ass-scraping.jpg" class="post-thumb">
          <div class="post-overlay">
            <div class="overlay-content">
              <div class="overlay-title">Skill Assessment Scraping</div>
              <div class="post-meta">Scraping • 5 min read • 2025</div>
              <div class="overlay-desc">Scraping Website Skill Assessment di Australia.</div>
              <a href="{{ site.baseurl }}/projects/assessment-scraping" class="overlay-btn">Baca selengkapnya →</a>
            </div>
          </div>
        </div>
    </div>
    <script>
    const gridBtn = document.getElementById("gridView");
    const listBtn = document.getElementById("listView");
    const container = document.querySelector(".posts-grid");
    // DEFAULT = GRID MODE
    container.classList.add("grid-view");
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

