<!-- HEADER CAROUSEL -->
<style>
.carousel-container {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
  border-radius: 12px;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeSlide 18s infinite;
  opacity: 0;
}

.carousel-slide:nth-child(1) { animation-delay: 0s; }
.carousel-slide:nth-child(2) { animation-delay: 6s; }
.carousel-slide:nth-child(3) { animation-delay: 12s; }

@keyframes fadeSlide {
  0% { opacity: 0; }
  10% { opacity: 1; }
  30% { opacity: 1; }
  40% { opacity: 0; }
  100% { opacity: 0; }
}

.header-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 32px;
  font-weight: 700;
  text-shadow: 0 0 12px rgba(0,0,0,0.7);
  text-align: center;
}
</style>

<div class="carousel-container">
  <img class="carousel-slide" src="{{ site.baseurl }}/assets/img/header1.jpg">
  <img class="carousel-slide" src="{{ site.baseurl }}/assets/img/header2.jpg">
  <img class="carousel-slide" src="{{ site.baseurl }}/assets/img/header3.jpg">
  <img class="carousel-slide" src="{{ site.baseurl }}/assets/img/header4.jpg">
  <img class="carousel-slide" src="{{ site.baseurl }}/assets/img/header5.jpg">
  <img class="carousel-slide" src="{{ site.baseurl }}/assets/img/header6.jpg">
  <img class="carousel-slide" src="{{ site.baseurl }}/assets/img/header7.jpg">

  
  <div class="header-title">
    Magang Interlace Studies Bali
  </div>
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

/* CARD */
.post-card {
  background: #2a2f36;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: 0.25s;
}

.post-card:hover {
  transform: translateY(-5px);
}

.post-thumb {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

.post-body {
  padding: 20px;
}

.post-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.post-desc {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 15px;
}

.btn-read {
  background: #111;
  color: white;
  padding: 10px 18px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  transition: 0.2s;
}

.btn-read:hover {
  background: #333;
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
<div class="navbar">
  <div style="font-size:20px; font-weight:600;">Ajus' Blog</div>
  <div>
    <a href="/">Blog</a>
    <a href="#projects">Projects</a>
    <a href="#about">Tentang</a>
    <a href="#contact">Lokasi</a>
  </div>
</div>

<!-- HERO IMAGE -->
<div class="container">
  <div class="section-title">Postingan Terbaru</div>

  <div class="content-wrapper">
    <!-- GRID POST -->
    <div class="posts-grid">
      <!-- CARD 1 -->
      <div class="post-card">
        <img src="{{ site.baseurl }}/assets/img/providers-thumb.jpg" class="post-thumb">
        <div class="post-body">
          <div class="post-title">Providers Scraping System</div>
          <div class="post-desc">Scraping data universitas Australia lengkap dengan CRICOS, tuition fee, entry requirements, dan duration.</div>
          <a href="/projects/providers-scraping" class="btn-read">Baca selengkapnya</a>
        </div>
      </div>
      <!-- CARD 2 -->
      <div class="post-card">
        <img src="{{ site.baseurl }}/assets/img/jobportal-thumb.jpg" class="post-thumb">
        <div class="post-body">
          <div class="post-title">IT Job Portal Scraping</div>
          <div class="post-desc">Mengambil data lowongan pekerjaan IT dan memetakannya sebagai dataset analisis.</div>
          <a href="/projects/scraping-job-portal" class="btn-read">Baca selengkapnya</a>
        </div>
      </div>
      <!-- CARD 3 -->
      <div class="post-card">
        <img src="{{ site.baseurl }}/assets/img/anzsco-thumb.jpg" class="post-thumb">
        <div class="post-body">
          <div class="post-title">ANZSCO Scraping</div>
          <div class="post-desc">Scraping informasi ANZSCO untuk pemetaan job family dan skill level.</div>
          <a href="/projects/anzsco-scraping" class="btn-read">Baca selengkapnya</a>
        </div>
      </div>
      <!-- CARD 4 -->
      <div class="post-card">
        <img src="{{ site.baseurl }}/assets/img/itjobs-viz-thumb.jpg" class="post-thumb">
        <div class="post-body">
          <div class="post-title">IT Job Visualization</div>
          <div class="post-desc">Visualisasi tren role pekerjaan IT berdasarkan dataset job scraping.</div>
          <a href="/projects/itjobs-viz" class="btn-read">Baca selengkapnya</a>
        </div>
      </div>
    </div>


