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
  <div class="navbar-left">Ajus' Blog</div>
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
  height: 260px;
  overflow: hidden;
  border-radius: 12px;
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

<div class="header-wrapper">
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
</div>


<br>



<style>
  .header-wrapper {
  max-width: 1300px;       /* sama seperti post */
  margin: 0 auto;          /* biar center */
  padding: 0 20px;         /* biar tidak nempel pinggir */
}

.slideshow-container {
  width: 100%;             /* mengikuti container */
  height: 260px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
}
.navbar {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1300px; /* samakan dengan container */
  max-width: 100%;
  padding: 12px 32px;
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  border-radius: 0 0 12px 12px; /* biar lebih rapi */
}

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
          <a href="{{ site.baseurl }}/projects/providers-scraping" class="btn-read">Baca selengkapnya</a>
        </div>
      </div>
      <!-- CARD 2 -->
      <div class="post-card">
        <img src="{{ site.baseurl }}/assets/img/jobportal-thumb.jpg" class="post-thumb">
        <div class="post-body">
          <div class="post-title">IT Job Portal Scraping</div>
          <div class="post-desc">Mengambil data lowongan pekerjaan IT dan memetakannya sebagai dataset analisis.</div>
          <a href="{{ site.baseurl }}/projects/scraping-job-portal" class="btn-read">Baca selengkapnya</a>
        </div>
      </div>
      <!-- CARD 3 -->
      <div class="post-card">
        <img src="{{ site.baseurl }}/assets/img/anzsco-thumb.jpg" class="post-thumb">
        <div class="post-body">
          <div class="post-title">ANZSCO Scraping</div>
          <div class="post-desc">Scraping informasi ANZSCO untuk pemetaan job family dan skill level.</div>
          <a href="{{ site.baseurl }}/projects/anzsco-scraping" class="btn-read">Baca selengkapnya</a>
        </div>
      </div>
      <!-- CARD 4 -->
      <div class="post-card">
        <img src="{{ site.baseurl }}/assets/img/itjobs-viz-thumb.jpg" class="post-thumb">
        <div class="post-body">
          <div class="post-title">IT Job Visualization</div>
          <div class="post-desc">Visualisasi tren role pekerjaan IT berdasarkan dataset job scraping.</div>
          <a href="{{ site.baseurl }}/projects/itjobs-viz" class="btn-read">Baca selengkapnya</a>
        </div>
      </div>
    </div>
