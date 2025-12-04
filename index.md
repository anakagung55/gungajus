<!-- ================= NAVBAR FIX ================= -->
<style>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 14px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0,0.35);
  backdrop-filter: blur(10px);
  z-index: 1000;
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
  opacity: 0.7;
}

/* Space to offset fixed navbar */
.header-wrapper {
  margin-top: 70px;
}

/* HEADER IMAGE */
.header-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 12px;
  position: relative;
}

/* TITLE ON TOP OF IMAGE */
.header-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 34px;
  font-weight: 700;
  text-shadow: 0 0 12px rgba(0,0,0,0.7);
  text-align: center;
}
</style>

<!-- ================= NAVBAR HTML ================= -->
<div class="navbar">
  <div class="navbar-left">Ajus' Blog</div>
  <div class="navbar-right">
    <a href="{{ site.baseurl }}/">Blog</a>
    <a href="{{ site.baseurl }}/galeri">Galeri</a>
    <a href="{{ site.baseurl }}/tentang">Tentang</a>
    <a href="{{ site.baseurl }}/lokasi">Lokasi</a>
  </div>
</div>

<!-- ================= HEADER IMAGE ================= -->
<div class="header-wrapper" style="position: relative;">
  <img src="{{ site.baseurl }}/assets/img/header1.jpg" class="header-img">
  <img src="{{ site.baseurl }}/assets/img/header2.jpg" class="header-img">
  <img src="{{ site.baseurl }}/assets/img/header3.jpg" class="header-img">
  <img src="{{ site.baseurl }}/assets/img/header4.jpg" class="header-img">
  <img src="{{ site.baseurl }}/assets/img/header5.jpg" class="header-img">
  <img src="{{ site.baseurl }}/assets/img/header6.jpg" class="header-img">
  <img src="{{ site.baseurl }}/assets/img/header7.jpg" class="header-img">
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


